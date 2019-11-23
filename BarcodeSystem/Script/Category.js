
var id = 3;
function Add() {
    id += 1;
    var categoryName = document.getElementById("CategoryName").value;
    var description = document.getElementById("Description").value;
    var categoryImage = document.getElementById("CategoryImage").value;

    //Herbir tr'ye uniqe  id degeri verdik bu sayede silme işlemi yaparken ben silmek istediğimiz row'u yakalamış olacağız. 
    var category = "<tr id=" + id + "><th>" + id + "</th>                                                                                                             <td>" + categoryImage + "</td>                                                                                                  <td>" + categoryName + "</td>                                                                                                    <td>" + description + "</td>                                                                                                    <td><span onclick='Delete(" + id + ")'  class='garbage'>                                                                         <i class='fas fa-trash-alt'></i></span>                                                                                       <span onclick='SelectRow(" + id + ")' class='edit'><i class='fas fa-edit'></i></span></td ></tr >";

    //  !! degerin null olup olmadıgı kontrol eder null ise false null degil ise true deger döndürür.Null ise ekleme yapma demiş olduk bu if else blogunda.
    if (!!categoryName && !!description && !!categoryImage) {
        var tbody = document.getElementById("tbody");
        tbody.insertAdjacentHTML('beforeend', category);  // string olarak yazdığımız htmli bildirmiş oldugumuz html'in sonuna ekliyor
        ClearCategoryForm();
    } else {
        alert("Lütfen Kategori Formundaki Boş Alanları Doldurun");

    }
}

function SelectRow(id) {
    var elements = document.getElementsByTagName('input');// tüm imput elemenlerimizi yakaladık getElementsByTagName bize input dizisi dönderiyor  t
    var rowCells = document.getElementById(id).children; //bu kod ile tr'nin tüm child elementlerini ulaştık
    var a = document.getElementById('Description').value = rowCells[rowCells.length - 2].textContent;
    for (var i = 0; i < rowCells.length; i++) {
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
    rowCells[rowCells.length - 2].textContent = document.getElementById("Description").value; // text area bir input olmadıgı için for döngüsünde degerini değiştiremezdik bu yüzden seçilen satırın 3.sütununu textarea'daki degeri yazdıkdır.
       

}

function Delete(id) {
    var result = confirm("Bu Ürünü Silmek İstiyor musunuz?");
    if (result) {
        var element = document.getElementById(id);
        element.parentNode.removeChild(element);
        alert("Ürün Silindi");
    }
}

function ClearCategoryForm() {
    var elements = document.getElementsByTagName('input'); // getElementsByTagName bize bir dizi döndürür çünkü html kodumuzda birçok input elementimiz olabilir , for ile içerisinde dolasarak value degerlerini temizledik.
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].type === "text") {
            elements[i].value = "";
        }
        var a = document.getElementById('Description').value = "";
    }
}



