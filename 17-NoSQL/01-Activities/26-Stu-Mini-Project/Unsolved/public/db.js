let db;
// create a new db request for a "BudgetDB" database.
const request = indexedDB.open("BudgetDB", 1)

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  const BudgetStore = db.createObjectStore("BudgetStore", {
    autoIncrement: true, 
  })
  // create object store called "BudgetStore" and set autoIncrement to true
};

request.onsuccess = function (event) {
  db = event.target.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  console.log(event.target.error);
};

function saveRecord(record) {
  const db = request.result;
  const transaction = db.transaction(["BudgetStore"], "readwrite");
  const BudgetStore = transaction.objectStore("BudgetStore")
  
  BudgetStore.add(record)
  // create a transaction on the pending db with readwrite access
  // access your pending object store
  // add record to your store with add method.
}

function checkDatabase() {
  // open a transaction on your pending db
  // access your pending object store
  // get all records from store and set to a variable
  const transaction = db.transaction(["BudgetStore"], "readwrite");
  const BudgetStore = transaction.objectStore("BudgetStore")
  getAll = BudgetStore.getAll();

  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then(() => {
          // if successful, open a transaction on your pending db
          // access your pending object store
          // clear all items in your store
          const transaction = db.transaction(["BudgetStore"], "readwrite");
          const BudgetStore = transaction.objectStore("BudgetStore")
          BudgetStore.clear()
        });
    }
  };
}

// listen for app coming back online
window.addEventListener('online', checkDatabase);
