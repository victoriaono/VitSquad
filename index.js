function clearDiagnosis() {
  document.getElementById("issue").innerHTML = ""
  document.getElementById("solution").innerHTML = ""
}

function showDiagnosis() {

  var input = document.getElementById("name").value;
  document.getElementById("patient").innerHTML = "History of " + input + "\'s vitals:"

  var bodyTemp = document.getElementById("bt").value;
  var bloodPres = document.getElementById("bp").value;
  var heartRate = document.getElementById("hr").value;
  var resRate = document.getElementById("rr").value;


  if (bodyTemp > 99.1) {
    document.getElementById("issue").innerHTML += "Pyrexia" + "<br>" 
    document.getElementById("solution").innerHTML += "The patient is at risk of a fever. The patient needs to cool down immediately." + "<br>" 
    } 
  else if (bodyTemp < 97.8) {
    document.getElementById("issue").innerHTML += "Hypothermia" + "<br>"
    document.getElementById("solution").innerHTML += "Extremely low body temperature. The patient needs to warm up." + "<br>" 
  }

  if (bloodPres > 160) {
  document.getElementById("issue").innerHTML += "Hypertension" + "<br>"
  document.getElementById("solution").innerHTML += "Irregular blood flow - patient is at risk of heart attack, stroke, kidney problems, and death! Patient needs to calm down - the blood pressure needs to decrease." + "<br>" 
    }
 else if (bloodPres < 110) {
  document.getElementById("issue").innerHTML += "Hypotension" + "<br>"
    document.getElementById("solution").innerHTML += "Low blood pressure. The patient is at risk of serious heart disorders and organ failure. Patient needs to more drink water." + "<br>" 
  }

  if (heartRate > 100) {
    document.getElementById("issue").innerHTML += "Bradycardia" + "<br>"
        document.getElementById("solution").innerHTML += "Abnormally slow heart rate - the patient is experiencing an issue with the electrical system in heart. The patient needs professional medical help immediately!" + "<br>" 

    }
 else if (heartRate < 60) {
  document.getElementById("issue").innerHTML += "Tachycardia" + "<br>"
      document.getElementById("solution").innerHTML += "Abnormally rapid heart rate - the patient is experiencing an issue with the electrical system or lower heart chambers. The patient needs professional medical care immediately!" + "<br>" 

  }
  if (resRate > 16) {
  document.getElementById("issue").innerHTML += "Tachypnea" + "<br>"
      document.getElementById("solution").innerHTML += "Abnormally fast breathing. The patient needs professional medical care immediately; wide variations of causes." + "<br>" 

    }
 else if (resRate < 12) {
  document.getElementById("issue").innerHTML += "Bradypnea" + "<br>"
      document.getElementById("solution").innerHTML += "Abnormally slow breathing. The patient needs professional medical care immediately; potential damage to heart tissue!" + "<br>" 

  }
}

const form = document.querySelector('form');
const tbody = document.querySelector('tbody');
const button = document.querySelector('button'); // to clear vitals
const bp = document.getElementById("bp");
const hr = document.getElementById("hr");
const rr = document.getElementById("rr");
const bt = document.getElementById("bt");
let itemsArray1 = localStorage.getItem('items1') ? JSON.parse(localStorage.getItem('items1')) : [];
let itemsArray2 = localStorage.getItem('items2') ? JSON.parse(localStorage.getItem('items2')) : [];
let itemsArray3 = localStorage.getItem('items3') ? JSON.parse(localStorage.getItem('items3')) : [];
let itemsArray4 = localStorage.getItem('items4') ? JSON.parse(localStorage.getItem('items4')) : [];


// localStorage.setItem('items1', JSON.stringify(itemsArray1));
// const data1 = JSON.parse(localStorage.getItem('items1'));
// localStorage.setItem('items2', JSON.stringify(itemsArray2));
// const data2 = JSON.parse(localStorage.getItem('items2'));

const tableMaker = (texts) => {
  const tr = document.createElement('tr');

  for (var i = 0; i < texts.length; i++) {
      const td = document.createElement('td');
      td.textContent = texts[i]
      tr.appendChild(td);
  }
  tbody.appendChild(tr);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  var texts = [];
  itemsArray1.push(bp.value);
  localStorage.setItem('items1', JSON.stringify(itemsArray1));
  texts.push(bp.value);
  bp.value = "";
  itemsArray2.push(hr.value);
  localStorage.setItem('items2', JSON.stringify(itemsArray2));
  texts.push(hr.value);
  hr.value = "";
  itemsArray3.push(rr.value);
  localStorage.setItem('items3', JSON.stringify(itemsArray3));
  texts.push(rr.value);
  rr.value = "";
  itemsArray4.push(bt.value);
  localStorage.setItem('items4', JSON.stringify(itemsArray4));
  texts.push(bt.value);
  bt.value = "";

  tableMaker(texts);
});

// data1.forEach(item => {
//   tableMaker(item);
// });
// data2.forEach(item => {
//   tableMaker(item);
// });

button.addEventListener('click', function () {
  localStorage.clear();
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
});