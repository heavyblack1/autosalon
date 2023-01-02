
// var itemForm = document.getElementById('itemForm'); // getting the parent container of all the checkbox inputs

// document.getElementById('submit').addEventListener('click', getData); //add a click event to the save button

let result = [];

function getData(checkBoxes) { // this function will get called when the save button is clicked
    result = [];
    let price = 0;
    checkBoxes.forEach(item => { // loop all the checkbox item
        price = 0;
        if (item.checked) {  //if the check box is checked
            switch (item.value) {
                case 'v-cam':
                    price = 10_000;
                    console.log("10 000");
                    break; //
                case 'v-whells':
                    price = 20_000;
                    console.log("20 000");
                    break;
                case 'v-sedacky':
                    price = 50_000;
                    console.log("50 000");
                    break;
                case 'v-tuning':
                    price = 0.02;
                    console.log("0.02");
                    break;

                default:
                    price = 0;
                    break;
            }
            result.push(price);
            // let data = {    // create an object
            //     item: item.value,
            //     selected: item.checked
            // }
            // result.push(data); //stored the objects to result array
            // console.log(data);
        }
        return result;
    })
    console.log(result);
    return result;
    // document.querySelector('.result').textContent = JSON.stringify(result); // display result
}

function getOption() {
    selectElement = document.querySelector('#select-car');
    output = selectElement.value;
    // document.querySelector('.output').textContent = output;
    console.log(output);
    return output;
}
function RadioValue() {
    var ele = document.getElementsByName('color');
    let radioValue;


    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            // radioValue = ele[i].value;
            switch (ele[i].value) {

                case "color-basic":
                    radioValue = 0;
                    break;
                case "color-fried":
                    radioValue = 0.05;
                    break;
                case "color-metal":
                    radioValue = 0.07;
                    break;
                default:
                    break;
            }
    }

    console.log(`radio :${radioValue}`);
    return radioValue;
}

// function getCheckedCheckboxesFor(checkboxName) {
//     var checkboxes = document.querySelectorAll('input[name="' + checkboxName + '"]:checked'), values = [];
//     Array.prototype.forEach.call(checkboxes, function (el) {
//         values.push(el.value);
//     });
//     return values;
// }

// function getCheckboxValue() {


//     // get beauty products checkboxes contianer's reference
//     var el = document.getElementById('beautyProducts');
//     // get beauty product input element reference in beauty products container
//     var products = el.getElementsByTagName('input');
//     // get products length
//     var len = products.length;
//     // call updateCost() function to onclick event on every checkbox
//     for (var i = 0; i < len; i++) {
//         if (products[i].type === 'checkbox') {
//             products[i].onclick = updateCost;
//         }
//     }

//     var l1 = document.getElementById("v-cam");
//     var l2 = document.getElementById("v-whells");
//     var l3 = document.getElementById("v-sedacky");
//     var l4 = document.getElementById("v-tuning");

//     var cb1 = false;
//     var cb2 = false;
//     var cb3 = false;
//     var cb4 = false;

//     var res = " ";
//     if (l1.checked == true) {
//         var pl1 = document.getElementById("v-cam").value;
//         cb1 = true;
//         console.log(pl1);
//     }
//     else if (l2.checked == true) {
//         var pl2 = document.getElementById("v-whells").value;
//         cb2 = true;
//         console.log(pl2);
//     }
//     else if (l3.checked == true) {
//         document.write(res);
//         var pl3 = document.getElementById("v-sedacky").value;
//         cb3 = true;
//         console.log(pl3);
//     }
//     else if (l4.checked == true) {
//         var pl4 = document.getElementById("v-tuning").value;
//         cb4 = true;
//         console.log(pl4);
//     }
// }

document.querySelector('#count').addEventListener('click', function () {
    var total = 0;
    var checkBoxes = document.querySelectorAll('input[type="checkbox"]'); // get all the check box
    var max_acetable_price = document.querySelector('#max-acetable-price');
    var form_total = document.querySelector('#form-total');
    var acetable_price = document.querySelector('#acetable-price');
    console.log(max_acetable_price);

    console.log(checkBoxes);

    let car = getOption(checkBoxes)
    console.log(`car: ${car}`);
    let color = RadioValue();


    let vybava = getData(checkBoxes);

    let car_price = 0;
    switch (car) {
        case 'm':
            car_price = 1_500_000;
            break;
        case 'v':
            car_price = 1_200_000;
            break;
        case 'a':
            car_price = 1_350_000;
            break;
        case 'b':
            car_price = 1_400_000;
            break;
        default:
            break;
    }
    total = car_price
    console.log(`car_price ${car_price}`);

    // color
    total += 1_500_000 * color;
    console.log(`color ${total}`);
    // vybava
    for (let i = 0; i < vybava.length; i++) {
        if (vybava[i] > 1) {
            total += vybava[i];
        }
        else {
            total += car_price * vybava[i];
        }
        console.log(`car ${vybava[i]}`);

    }

    console.log(`total ${total}`);

    form_total.value = `Celková cena je ${total}`;
    if (total > Number(max_acetable_price.value)) {
        acetable_price.value = "Auto je moc drahé!"
    }
    else {
        acetable_price.value = "Jo můžete si to dovolit. "
    }

});

// Form Validation
// ----------------------------------------------------------------

// select form element
const form = document.querySelector("form");

// listen to submit event
form.addEventListener('submit', e => {
    if (!form.checkValidity()) {
        // if is not valid will prevent form from submit
        e.preventDefault()
    }
    // will add bootstrap class as user typing only if user previously click submit
    form.classList.add('was-validated')

});
