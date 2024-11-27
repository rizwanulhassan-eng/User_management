"use strict";
// class Contact {
//     constructor(public name: string, public email: string, public phone: string) {}
//   }
var _a, _b;
;
class ContactManager {
    constructor() {
        this.contacts = [];
    }
    addContact(name, email, phone) {
        this.contacts.push({ name, email, phone });
        this.renderContacts();
    }
    editContact(index, name, email, phone) {
        this.contacts[index].name = name;
        this.contacts[index].phone = phone;
        this.contacts[index].email = email;
        this.renderContacts();
    }
    deleteContact(index) {
        this.contacts.splice(index, 1);
        this.renderContacts();
    }
    renderContacts() {
        const contactList = document.getElementById("contact-list");
        if (!contactList)
            return;
        contactList.innerHTML = this.contacts
            .map((contact, index) => `
          <div class="contact-item">
            <span><strong>Name:</strong> ${contact.name}</span>
            <span><strong>Email:</strong> ${contact.email}</span>
            <span><strong>Phone:</strong> ${contact.phone}</span>
            <div class="actions">
              <button onclick="editContact(${index})">Edit</button>
              <button onclick="deleteContact(${index})">Delete</button>
            </div>
          </div>
        `)
            .join("");
    }
}
const manager = new ContactManager();
let ind = -1;
(_a = document.getElementById("add-contact")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    if (!name || !email || !phone) {
        alert("All fields are required!");
        return;
    }
    manager.addContact(name, email, phone);
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
});
// Make deleteContact globally accessible
const deleteContact = (index) => {
    manager.deleteContact(index);
};
const editContact = (index) => {
    document.getElementsByClassName("container-1")[0].style.display = "block";
    document.getElementById("overlay").style.display = "block";
    ind = index;
};
(_b = document.getElementById("edit")) === null || _b === void 0 ? void 0 : _b.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name1").value;
    const email = document.getElementById("email1").value;
    const phone = document.getElementById("phone1").value;
    manager.editContact(ind, name, email, phone);
    document.getElementsByClassName("container-1")[0].style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("name1").value = "";
    document.getElementById("email1").value = "";
    document.getElementById("phone1").value = "";
});
