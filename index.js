  $(function () {
    console.log('running');
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
  $(document).ready(function(){

    const img_array = [{'imgurl':'https://i.pinimg.com/564x/50/d4/ef/50d4efac80180afec22b52208368e3db.jpg','imgname':'Lotus','price':'$299'},
    {'imgurl':'https://i.pinimg.com/564x/a3/e0/5b/a3e05b61582cb7fbdb74c921f68882e8.jpg','imgname':'Tulip','price':'$299'},
    {'imgurl':'https://i.pinimg.com/564x/91/30/40/913040ab1401949f9721ef87891289a9.jpg','imgname':'Azalea','price':'$299'},
    {'imgurl':'https://images.unsplash.com/photo-1540039906769-84cf3d448bc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80','imgname':'Yellow Sunflower','price':'$299'},
    {'imgurl':'https://images.unsplash.com/photo-1501973931234-5ac2964cd94a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80','imgname':'White Hibiscus','price':'$299'},
    {'imgurl':'https://images.unsplash.com/photo-1567990989224-6441e1483ac8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80','imgname':'Red Hibiscus','price':'$299'}]
    console.log(img_array);
    for(var i=0; i<img_array.length; i++){

    console.log(img_array[i]);
    const data = ` <div class="card1" style="width: 18rem;">
    <a href="javascript:void(0)" onclick="buynow('`+img_array[i].imgurl+`,`+img_array[i].imgname +`,`+img_array[i].price +`')" ><img src="`+img_array[i].imgurl+ `" class="card-img-top" alt="..."></a>
    <hr>
    <div>
    <a href="javascript:void(0)" onclick="buynow('`+img_array[i].imgurl+`,`+img_array[i].imgname +`,`+img_array[i].price +`')" >`+img_array[i].imgname +`</a>
    </div>
    <hr>
    </div>`;

    $('.items').append(data);
  }
  
 

})
function getorder(){
    console.log('ordering');
}

function form(e){
    e.preventDefault();
        const t_type = document.getElementById('transc-type').value;
        console.log(t_type);
        const t_typevalue = document.getElementById('transc-type').options[document.getElementById('depart').selectedIndex].text;
        console.log(t_typevalue);
        const amount = document.getElementById('amount').value;
        console.log(amount);
        const acc_no = document.getElementById('accnum').value;
        console.log(acc_no);
        details(t_type + ', '+ amount +','+acc_no);
        alert(`Transfered Rs.${amount} to ${acc_no}.`);
    }
    
    function details(data){
        console.log(data);
        const res = data.split(',');
        console.log('res',res);
        const user = new Object()
        for(var i=0;i<res.length;i++){

            const userdata = user.res[i];
            console.log(userdata);
        }
    }

    function buynow(img){
        console.log(img);
        const img_data = img.split(',');
        const img_data1 = img_data[0];
        const img_data2 = img_data[1];
        const img_data3 = img_data[2];
        const imagesarray= [{'imgurl':img_data1,'imgname':img_data2,'price':img_data3}];
        console.log(imagesarray);
        console.log(img_data1 , img_data2);
        localStorage.setItem('image',JSON.stringify(imagesarray));
        window.location.href = "order.html";
        
    }
