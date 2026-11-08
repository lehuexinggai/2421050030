-- Câu lệnh tạo database
-- create database + tên db 

create database if not exists netflix;
create table if not exists nguoi_dung(
    id int auto_increment primary key,
    ten_dang_nhap varchar(50),
    mat_khau varchar(30),
    email varchar(50),
    so_dien_thoai varchar(10),
    dao_dien_id int
);

-- phim
create table if not exists phim(
    id int auto_increment primary key,
    ten_phim varchar(100),
    thoi_luong int,
    nam int,
    gioi_thieu varchar(255)
);
-- phim_dien_vien
create table if not exists phim_dien_vien(
    id int auto_increment primary key,
    phim_id int,
    dien_vien_id int
);
-- dao_dien
create table if not exists dao_dien(
    id int auto_increment primary key,
    ten_dao_dien varchar(50)
);
-- the_loai
create table if not exists the_loai(
    id int auto_increment primary key,
    ten_the_loai varchar(100)
);
--phim_the_loai
create table if not exists phim_the_loai(
    id int auto_increment primary key,
    phim_id int,
    the_loai_id int
);
--dien_vien
create table if not exists dien_vien(
    id int auto_increment primary key,
    ten_dien_vien varchar(50)
);
-- quoc-gia
create table if not exists quoc_gia(
    id int auto_increment primary key,
    ten_quoc_gia varchar(50)
);

-- Câu lệnh Insert:
INSERT INTO `dien_vien`(`id`, `ten_dien_vien`) VALUES ('[value-1]','[value-2]')
-- Câu lệnh Update:
UPDATE `dien_vien` SET `id`='[value-1]',`ten_dien_vien`='[value-2]' WHERE 1
-- Câu lệnh join.. on(Kết nối bảng phim với thể loại)
select * from phim p
join phim_the_loai ptl
on p.id = ptl.phim_id
join the_loai tl
on ptl.the_loai_id = tl.id
where p.id = 1

