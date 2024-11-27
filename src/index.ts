// class Contact {
//     constructor(public name: string, public email: string, public phone: string) {}
//   }
  
//   class ContactManager {
//     private contacts: Contact[] = [];
  
//     addContact(contact: Contact): void {
//       this.contacts.push(contact);
//       console.log(`Contact added: ${contact.name}`);
//     }
  
//     listContacts(): void {
//       console.log("Contact List:");
//       this.contacts.forEach((contact, index) => {
//         console.log(`${index + 1}. ${contact.name} - ${contact.email} - ${contact.phone}`);
//       });
//     }
  
//     editContact(index: number, updatedContact: Contact): void {
//       if (index >= 0 && index < this.contacts.length) {
//         this.contacts[index] = updatedContact;
//         console.log(`Contact updated at index ${index + 1}`);
//       } else {
//         console.log("Invalid index.");
//       }
//     }
//   }
  
//   // Example usage
//   const manager = new ContactManager();
//   manager.addContact(new Contact("John Doe", "john.doe@example.com", "123-456-7890"));
//   manager.addContact(new Contact("Jane Smith", "jane.smith@example.com", "987-654-3210"));
  
//   manager.listContacts();
//   manager.editContact(0, new Contact("John Updated", "john.updated@example.com", "111-222-3333"));
//   manager.listContacts();
  
interface Users{
    name:string,
    email:string,
    phone:string
};
class ContactManager {
    
    private contacts: Users[] = [];
  
    addContact(name: string, email: string, phone: string): void {
      this.contacts.push({ name, email, phone });
      this.renderContacts();
    }

    editContact(index:number,name:string,email:string,phone:string):void{
        this.contacts[index].name=name;
        this.contacts[index].phone=phone;
        this.contacts[index].email=email;
        this.renderContacts();
    }
  
    deleteContact(index: number): void {
      this.contacts.splice(index, 1);
      this.renderContacts();
    }
  
    renderContacts(): void {
      const contactList = document.getElementById("contact-list");
      if (!contactList) return;
  
      contactList.innerHTML = this.contacts
        .map(
          (contact, index) => `
          <div class="contact-item">
            <span><strong>Name:</strong> ${contact.name}</span>
            <span><strong>Email:</strong> ${contact.email}</span>
            <span><strong>Phone:</strong> ${contact.phone}</span>
            <div class="actions">
              <button onclick="editContact(${index})">Edit</button>
              <button onclick="deleteContact(${index})">Delete</button>
            </div>
          </div>
        `
        )
        .join("");
    }
  }
  
  const manager = new ContactManager();
  let ind:number=-1;
  
  document.getElementById("add-contact")?.addEventListener("click", () => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
  
    if (!name || !email || !phone) {
      alert("All fields are required!");
      return;
    }
  
    manager.addContact(name, email, phone);
    (document.getElementById("name") as HTMLInputElement).value = "";
    (document.getElementById("email") as HTMLInputElement).value = "";
    (document.getElementById("phone") as HTMLInputElement).value = "";
  });
  
  
  // Make deleteContact globally accessible
  const deleteContact = (index: number):void => {
    manager.deleteContact(index);
  };
  const editContact = (index: number) => {
    (document.getElementsByClassName("container-1")[0] as HTMLElement).style.display="block";
    (document.getElementById("overlay") as HTMLInputElement).style.display = "block";
    ind=index;
  };

  document.getElementById("edit")?.addEventListener("submit",(e:any)=>{
    e.preventDefault();
    const name = (document.getElementById("name1") as HTMLInputElement).value;
    const email = (document.getElementById("email1") as HTMLInputElement).value;
    const phone = (document.getElementById("phone1") as HTMLInputElement).value;
     manager.editContact(ind,name,email,phone);
     (document.getElementsByClassName("container-1")[0] as HTMLElement).style.display="none";
     (document.getElementById("overlay") as HTMLInputElement).style.display = "none";
     (document.getElementById("name1") as HTMLInputElement).value = "";
     (document.getElementById("email1") as HTMLInputElement).value = "";
     (document.getElementById("phone1") as HTMLInputElement).value = "";    
 
   }
 )




  