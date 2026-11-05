var danhSachBaiHat=[
                        {
                            id: 1,
                            ten: "3 PHẢI 6 ĐỪNG - Quân A.P (Official MV)",
                            duongDanAnh: "../Anh/3P6D.jfif",
                            duongDanYoutube: "https://www.youtube.com/embed/INJuqE_34eQ?si=CR8_2cR_Ynd9ri-7",
                        },
                        {
                            id: 2,
                            ten: "XA - ĐÔNG HÙNG, K.O, 14 CASPER | Anh Trai Vượt Ngàn Chông Gai 2026",
                            duongDanAnh: "../Anh/bautroimoi.jfif",
                            duongDanYoutube:"https://www.youtube.com/embed/2ghfD8YQfi4?si=QLhRzdciHB0d7A7Z",
                        },
                        {
                            id: 3,
                            ten: "Em Tôi",
                            duongDanAnh: "../Anh/thanhxuan.jfif",
                            duongDanYoutube:"https://www.youtube.com/embed/RKd3P1R2G0Q?si=4kQmq-PvMPgEX8JS",
                        },
                        {
                            id: 4,
                            ten: "Thức Giấc - Da LAB (Official Music Video)",
                            duongDanAnh: "../Anh/thucgiac.jfif",
                            duongDanYoutube:"https://www.youtube.com/embed/R3trO4a49go?si=YRZcZlAmlMBSMwQp",
                        }
                    ];

                    function chonBai(id){
                        for (let i=0; i < danhSachBaiHat.length; i++){
                            if(danhSachBaiHat[i].id == id){
                                document.getElementsByClassName("video")[0].src = danhSachBaiHat[i]. duongDanYoutube
                            }
                        }
                    }