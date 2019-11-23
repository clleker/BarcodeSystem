


var id = 3;
function Add() {
    id += 1;
    var productName = document.getElementById("ProductName").value;
    var unitPrice = document.getElementById("UnitPrice").value;
    var productBrand = document.getElementById("ProductBrand").value;
    var category = "Default";
    var barcodeNo = document.getElementById("BarcodeNo").value;
    var quantityPerUnit = document.getElementById("QuantityPerUnit").value;
    var kdvRate = document.getElementById("KdvRate").value;
    var unitInStock = document.getElementById("UnitInStock").value;
    //Herbir tr'ye uniqe  id degeri verdik bu sayede silme işlemi yaparken ben silmek istediğimiz row'u yakalamış olacağız. 
    var product = "<tr id=" + id + "><th>" + id + "</th>                                                                                                             <td>" + productName + "</td>                                                                                                  <td>" + barcodeNo + "</td>                                                                                                    <td>" + unitPrice + "</td>                                                                                                    <td>" + productBrand + "</td>                                                                                                 <td>" + category + "</td>                                                                                                     <td>" + quantityPerUnit + "</td>                                                                                              <td>" + unitInStock + "</td>                                                                                                  <td>" + kdvRate + "</td>                                                                                                      <td><span onclick='Delete(" + id + ")'  class='garbage'>                                                                                               <i class='fas fa-trash-alt'></i></span>                                                                                       <span onclick='SelectRow(" + id + ")' class='edit'>                                                                               <i class='fas fa-edit'></i></span></td ></tr >";

    //  !! degerin null olup olmadıgı kontrol eder null ise false null degil ise true deger döndürür.Null ise ekleme yapma demiş olduk bu if else blogunda.
    if (!!productName && !!unitPrice && !!productBrand && !!barcodeNo && !!quantityPerUnit && !!unitInStock) {
        var tbody = document.getElementById("tbody");
        tbody.insertAdjacentHTML('beforeend', product);  // string olarak yazdığımız htmli bildirmiş oldugumuz html'in sonuna ekliyor
        ClearProductForm();
    } else {
        alert("Lütfen Ürün Formundaki Boş Alanları Doldurun");

    }
}

function SelectRow(id) {
    var elements = document.getElementsByTagName('input');// tüm imput elemenlerimizi yakaladık getElementsByTagName bize input dizisi dönderiyor
    var rowCells = document.getElementById(id).children; //bu kod ile tr'nin tüm child elementlerini ulaştık.
    for (var i = 0; i < rowCells.length-1; i++) {
        if (rowCells[i].tagName === "TH" || rowCells[i].tagName === "TD") {
            elements[i].value = rowCells[i].textContent;
        }
    }
}

function Update() {
    var id = document.getElementById("ID").value; // hangi row güncellenecek ? input'dan id degerini getir
    var rowCells = document.getElementById(id).children; //id deger ile tr'ye ulaş;
    var elements = document.getElementsByTagName('input');
    for (var i = 0; i < elements.length; i++) {  //row içerisindeki td'lere degerleri yazdır.
        rowCells[i].textContent = elements[i].value;
    }
    ClearProductForm();
}

function Delete(id) {
    var result = confirm("Bu Ürünü Silmek İstiyor musunuz?");
    if (result) {
        var element = document.getElementById(id);
        element.parentNode.removeChild(element);
        alert("Ürün Silindi");
    }
}

function ClearProductForm() {
    var elements = document.getElementsByTagName('input'); // getElementsByTagName bize bir dizi döndürür çünkü html kodumuzda birçok input elementimiz olabilir , for ile içerisinde dolasarak value degerlerini temizledik.
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].type === "text") {
            elements[i].value = "";
        }
    }
}



