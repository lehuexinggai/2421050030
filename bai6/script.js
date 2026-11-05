var danhSanhPhim =[
    {
        id: 1,
        duongDanAnh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6XyfYtnWQKJieb7ZydIfQ-3MPkiIb5cUcI0sMd2mm6g&s=10"
    },
    {
        id: 2,
        duongDanAnh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU21ir7Iyfl4EnOeLfG0rN4Jpf3N_Rw_XdkIKK937RaA&s=10"
    },
    {
        id: 3,
        duongDanAnh:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmcrWRwxqf-5jkl9haBftQJCngwmOW_-QM1MFlC_A9w&s=10"
    },
    {
        id: 4,
        duongDanAnh:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCSX11b-YERVzFsCO8OAmpHqI2PRR1gvlip_98kp2hQA&s=10"
    },
    {
        id: 5,
        duongDanAnh:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD8dETMW4uiWWaxp7V8F6GrvMoQBuuOgcf5EAJOWCT4w&s=10"
    },
    {
        id: 6,
        duongDanAnh: "https://cdn.popsww.com/blog-kids/sites/3/2023/03/hinh-hoat-hinh-dong-vat.jpg"
                    
    },
    {
        id: 7,
        duongDanAnh: "https://cdn.popsww.com/blog-kids/sites/3/2023/03/phim-hoat-hinh-the-gioi-dong-vat.jpg"
    },
    {
        id: 8,
        duongDanAnh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEB6wV98dG3AE5Q-f1klA9Tty3_RzFMM0BVolntVgnaA&s=10"
    },
    {
        id: 9,
        duongDanAnh: "https://cdn.popsww.com/blog-kids/sites/3/2023/03/hoat-hinh-dong-vat-2.jpg"
    },
    {
        id: 10,
        duongDanAnh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJk6cJlgd314adLHiEGstb0llzExBzw8a_5xdSUfWe1g&s=10 "
    },
    {
        id: 11,
        duongDanAnh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS4BViaOh5O-mX_zdBsXworELAHvXVIU5_ZdxLKgHt4A&s=10"
    },
    {
        id: 12,
        duongDanAnh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPDi6rGD1NrQfFyinP6C1J3jfyBqIqk6pJnIgRkbWZCw&s=10"
    },
    {
        id: 13,
        duongDanAnh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTKTTA2Itstbbq9Si06ok9mkePu6OkEyHRRqPTg8Xb5g&s=10"
    },
    {
        id: 14,
        duongDanAnh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBvXfsl0wh6JkEg7iGi32bzrSrmdcfiT0M_cR4nSMYuA&s=10"
    },
    {
        id: 15,
        duongDanAnh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3_tTeDjvs3SNZkx7OfyHILaN_BzlLZxQ8DYK4ac2eQ&s=10"

    }
];

function chonAnh(id){
    for (let i=0; i < danhSanhPhim.length; i++){
        if(danhSanhPhim[i].id == id){
            document.getElementsByClassName("banner-img")[0].src =danhSanhPhim[i].duongDanAnh
        }
    }
}