<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <title>Cho tot</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&amp;subset=vietnamese" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="assets/css/vendor.css">
        <link rel="stylesheet" href="assets/css/style.css">

    </head>
    <body>
        <div id="app">
            <div id="sec1" class="main-wrapper layout-3">
                <!-- Start Top  -->
                <div class="top">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-3 col-sm-5 col-md-4 col-logo">
                                <div class="top-logo">
                                    <div class="logo-link">
                                        <a href="#"><img class="logo" src="assets/images/social/logo.jpg""></a>
                                    </div>

                                </div>
                            </div>
                            <div class="col-xs-9 col-sm-7 col-md-8 col-opt">
                                <div class="top-poc">

                                    <a class="onClickSearch show-sp" href="#" id="onClickSearch"><img src="assets/images/layout/icon-search.png" alt=""></a>

                                    <div class="top-oc top-login">
                                        <!-- chua dang nhap -->
                                        <!-- <a href="#" class="ct-btn"  data-bg=""><text>Đăng nhập/Đăng ký</text></a> -->

                                        <!-- sau khi da dang nhap -->
                                        <a class="ct-btn onClickInformation"  data-bg=""><text>Đăng nhập/Đăng ký</text></a>
                                    </div>
                                    <!-- show thong tin da dang nhap -->
                                    <ul class="show-information">
                                        <li><a href="#">Trang ca nhan</a></li>
                                        <li><a href="#">Dự án đã chọn</a></li>
                                        <li><a href="#">Thoat</a></li>
                                    </ul>
                                    <!-- end -->
                                    <div class="top-oc top-project">
                                        <a href="#" class="ct-btn" data-bg=""><text>Dự án đã chọn</text><span>2</span></a>
                                    </div>
                                    <!-- dang tin for pc -->
                                    <div class="top-oc top-post">
                                        <a href="#" class="ct-btn" data-bg=""><text>Đăng tin của bạn</text></a>
                                    </div>
                                    <!-- dang tin for sp -->
                                    <a  href="#" class="dang-tin show-sp">Đăng tin</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Top -->
                <!-- Start Search -->
                <div class="top-search">
                    <!-- top search -->
                    <div class="container"  style="position: relative;">
                        <div class="top-search-c top-search-la3">
                            <div class="row">
                                <div class="col col-md-12">
                                    <div class="search-block">
                                        <form action="#">
                                            <div class="form-list">
                                                <div class="form-item">
                                                    <div class="form-input form-text">
                                                        <input type="text" value="Nhập tìm kiếm..." class="focus-text">
                                                    </div>
                                                </div>
                                                <div class="form-item">
                                                    <ul class="form-right">
                                                        <li>
                                                            <div class="form-input form-select form-select-city">
                                                                <div class="input-nt" data-toggle="modal" data-target="#searchItem" id="selectItem">Tất cả danh mục</div>
                                                                <input type="hidden" value="Tất cả danh mục" class="input-dropdown value-category"> 
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="form-input form-select form-select-city">
                                                                <div class="input-nt" data-toggle="modal" data-target="#searchCity" id="selectCity">Khu vực</div>
                                                                <input type="hidden" value="Khu vực" class="input-dropdown value-category">
                                                            </div>
                                                        </li>
                                                        <li class="btn-link">
                                                            <button class="ct-btn  btn-post">TÌM KIẾM <span></span></button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- slider -->
                    <div class="slider-block layout_3--slider-block">
                        <div class="home-item">
                            <img src="assets/images/home/bg_head_home_2.png" alt="">
                        </div>
                        <div class="home-item">
                            <img src="assets/images/home/bg_head_home_2.png" alt="">
                        </div>
                    </div>
                    <!-- end slider -->
                </div>
                <!-- End Search -->
                <!-- home page -->
                <div class="page-content home-page">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 home-tit">
                                <h3 class="home-tit-o show-pc">Khám phá danh mục</h3>
                                <p class="login show-sp">
                                    <a class="a-login">Đăng nhập ngày</a>
                                    <a>Đăng ký tài khoản</a>
                                </p>
                            </div>
                            <div class="col-xs-f col-xs-8 col-sm-7 col-md-8 col-md-reverse">
                                <div class="top-slider">
                                    <div class="home-item item-large item-slider">
                                        <a href="#">
                                            <img src="assets/images/home/DVHM.png" alt="">
                                        </a>
                                    </div>
                                    <div class="home-item item-large item-slider">
                                        <a href="#">
                                            <img src="assets/images/home/30_05_2018_11_34_51_LG-TV-690-300.png" alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-f col-xs-4 col-sm-5 col-md-4 col-md-opt">
                                <div class="home-item item-large">
                                    <a href="#">
                                        <img class="foreign" src="assets/images/icon/1.jpg" alt="">
                                        <img class="bg" src="assets/images/home/nha-thau-thi-cong-2.png" alt="">
                                        <span>NHÀ THẦU THI CÔNG</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-xs-f col-xs-6 col-sm-6 col-md-4">
                                <div class="home-item item-medium">
                                    <a href="#">
                                        <img class="foreign" src="assets/images/icon/2.jpg" alt="">
                                        <img class="bg" src="assets/images/home/cau-duong.png" alt="">
                                        <span>DÂN DỤNG</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-xs-f col-xs-6 col-sm-6 col-md-4">
                                <div class="home-item item-medium">
                                    <a href="#">
                                        <img class="foreign" src="assets/images/icon/3.jpg" alt="">
                                        <img class="bg" src="assets/images/home/ha-tang.png" alt="">
                                        <span>HẠ TẦNG</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-xs-f col-xs-6 col-sm-6 col-md-4">
                                <div class="home-item item-medium">
                                    <a href="#">
                                        <img class="foreign" src="assets/images/icon/4.jpg" alt="">
                                        <img class="bg" src="assets/images/home/cau-duong.png" alt="">
                                        <span>CẦU ĐƯỜNG</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-xs-f col-xs-6 col-sm-6 col-md-4">
                                <div class="home-item item-medium">
                                    <a href="#">
                                        <img class="foreign foreign-w" src="assets/images/icon/5.jpg" alt="">
                                        <img class="bg" src="assets/images/home/hoan-thien-noi-ngoai-that.png" alt="">
                                        <span>HOÀN THIỆN NỘI NGOẠI THẤT</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-xs-f col-xs-6 col-sm-6 col-md-4">
                                <div class="home-item item-medium">
                                    <a href="#">
                                        <img class="foreign" src="assets/images/icon/6.jpg" alt="">
                                        <img class="bg" src="assets/images/home/kien-truc.png" alt="">
                                        <span>KIẾN TRÚC</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-xs-f col-xs-6 col-sm-6 col-md-4">
                                <div class="home-item item-medium">
                                    <a href="#">
                                        <img class="foreign" src="assets/images/icon/7.jpg" alt="">
                                        <img class="bg" src="assets/images/home/dien-nuoc.png" alt="">
                                        <span>ĐIỆN NƯỚC</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-xs-f col-xs-6 col-sm-6 col-md-4">
                                <div class="home-item item-medium">
                                    <a href="#">
                                        <img class="foreign" src="assets/images/icon/8.jpg" alt="">
                                        <img class="bg" src="assets/images/home/sua-chua.png" alt="">
                                        <span>SỬA CHỮA</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-xs-f col-xs-6 col-sm-6 col-md-4">
                                <div class="home-item item-medium">
                                    <a href="#">
                                        <img class="foreign" src="assets/images/home/layout-3/cay-xanh.png" alt="">
                                        <img class="bg" src="assets/images/home/cay-xanh.png" alt="">
                                        <span>CÂY XANH</span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-xs-f col-xs-6 col-sm-6 col-md-4">
                                <div class="home-item item-medium">
                                    <a href="#">
                                        <img class="foreign" src="assets/images/home/layout-3/dich-vu-ve-sinh.png" alt="">
                                        <img class="bg" src="assets/images/home/dich-vu-ve-sinh.png" alt="">
                                        <span>DỊCH VỤ VỆ SINH</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End home page -->
                <!-- fb share -->
                <div class="container">
                    <ul class="fix-share">
                        <li><a>Chia sẻ bài viết này cho bạn bè:</a>
                        <li>
                            <a href="javascript:void(0)" onclick="javascript:genericSocialShare('http://www.facebook.com/sharer.php?u=https://www.google.com/maps')"><img src="assets/images/social/icon-fb.png" alt=""></a>
                        </li>
                        <li>

                            <a class="zalo-share-button sc-RefOD bjSTUc" data-href="https://demo.com#xtatc=INT-5-[share_ad_via_zalo]" data-oaid="570044068386186227" data-layout="2" data-color="blue" data-customize="true">
                                <img src="assets/images/social/zalo.svg" height="40" width="40" alt="share button">
                            </a>
                        </li>
                        <li>

                            <a class="zalo-share-button sc-RefOD bjSTUc" data-href="https://demo.com#xtatc=INT-5-[share_ad_via_zalo]" data-oaid="570044068386186227" data-layout="2" data-color="blue" data-customize="true">
                                <img src="assets/images/social/messenger.svg" height="40" width="40" alt="share button">
                            </a>
                        </li>


                    </ul>  
                </div>                                                                 
                <!-- end -->
                <!-- footer -->
                <footer class="footer">
                    <div class="footer-top">
                        <div class="container">
                            <div class="row row-eq-height">
                                <div class="col-xs-3 col-sm-3 col-md-3 col-ft-social">
                                    <div class="ft-block company-social">
                                        <div class="ft-tit">LIÊN KẾT</div>
                                        <ul>
                                            <li><a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i>Facebook</a></li>
                                            <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i>Google+</a></li>
                                            <li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i>Youtube</a></li>
                                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i>Twitter</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xs-3 col-sm-3 col-md-3">
                                    <div class="ft-block">
                                        <div class="ft-tit">VỀ CÔNG TY</div>
                                        <ul>
                                            <li><a href="#">Giới thiệu</a></li>
                                            <li><a href="#">Tuyển dụng</a></li>
                                            <li><a href="#">Blog</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-480-full col-xs-3 col-sm-3 col-md-3">
                                    <div class="ft-block">
                                        <div class="ft-tit">VỀ KHÁCH HÀNG</div>
                                        <ul>
                                            <li><a href="#">Chính sách quảng cáo</a></li>
                                            <li><a href="#">Dịch vụ hậu mãi</a></li>
                                            <li><a href="#">Bảo mật thông tin</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xs-3 col-sm-3 col-md-3">
                                    <div class="ft-block">
                                        <div class="ft-img"><a href="#"><img src="assets/images/layout/dadangky.png" alt=""></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End footer top -->
                    <!-- Footer bottom -->
                    <div class="footer-bottom">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12">
                                    <div class="ftbt-i">
                                        <div class="ftbt-col ftbt-left">
                                            © 2018 Copyright by DungLV
                                        </div>
                                        <div class="ftbt-col ftbt-right">
                                            <ul>
                                                <li><a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Footer bottom -->
                </footer>
                <!-- End footer -->
            </div>
        </div>
        <!-- Mobile menu -->
        <div class="mobile-menu">
            <div class="mb-top">
                <div class="mb-menu-wr">
                    <div class="mb-menu-l">
                        <span class="mb-u"></span>
                    </div>
                    <div class="mb-menu-r">
                        <p>ĐĂNG NHẬP</p>
                        <p>Đăng nhập để bắt đầu đăng tin</p>
                    </div>
                </div>
            </div>
            <!-- End top mobile menu -->
            <div class="mb-over">
                <!-- Link menu mobile -->
                <div class="mb-menu-link">
                    <div class="mb-menu-wr">
                        <ul>
                            <li>
                                <a href="#"><span><img src="assets/images/layout/home.png" alt=""></span>VỀ TRANG CHỦ</a>
                            </li>
                            <li>
                                <a href="#"><span><img src="assets/images/layout/pencil-dark.png" alt=""></span>ĐĂNG TIN CỦA BẠN</a>
                            </li>
                            <li>
                                <a href="#"><span><img src="assets/images/layout/bookmark-light.png" alt=""></span>DỰ ÁN ĐÃ CHỌN  <strong>2</strong></a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href="#">GIỚI THIỆU</a>
                            </li>
                            <li>
                                <a href="#">TUYỂN DỤNG</a>
                            </li>
                            <li>
                                <a href="#">BLOG</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- End moblie menu link -->
                <!-- Social menu -->
                <div class="mb-menu-social">
                    <div class="mb-menu-wr">
                        <ul>
                            <li><a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
                <!-- Social menu -->
            </div>
        </div>
        <!-- End Mobile menu -->
        <div class="go-top">
        </div>
        <!-- modal search -->
        <!-- modal search -->
        <div class="modal fade searchModal" id="searchItem" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Chọn khu vực</h4>
                    </div>
                    <div class="modal-body">
                        <ul class="parent-menu">
                            <li><a class="next"><span>Tất cả</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                            <li><a class="next"><span>tim kiem 1</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                            <li><a class="next"><span>tim kiem 2</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                            <li><a class="next"><span>tim kiem 3</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                            <li><a class="next"><span>tim kiem 4</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                            <li><a class="next"><span>tim kiem 5</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                            <li><a class="next"><span>tim kiem 6</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                            <li><a class="next"><span>tim kiem 7</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                            <li><a class="next"><span>tim kiem 8</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                            <li><a class="next"><span>tim kiem 9</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                            <li><a class="next"><span>tim kiem 10</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                        </ul>
                        <!-- sub menu -->
                        <div class="sub-menu" style="display: none;">
                            <ul>
                                <li><a><span>Tất cả 1</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                                <li><a class="next sub-next"><span>tim kiem 1</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                                <li><a class="item-select"><span>tim kiem 2</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                                <li><a class="item-select"><span>tim kiem 3</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                                <li><a class="item-select"><span>tim kiem 4</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                                <li><a class="item-select"><span>tim kiem 5</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                                <li><a class="item-select"><span>tim kiem 6</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                                <li><a class="item-select"><span>tim kiem 7</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                                <li><a class="item-select"><span>tim kiem 8</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>

                            </ul>
                        </div>
                        <!-- sub sub menu -->
                        <div class="sub-menu-s" style="display: none;">
                            <ul>
                                <li><a><span>Tất cả 2</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                                <li><a class="item-select"><span>tim kiem 1</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                                <li><a class="item-select"><span>tim kiem 2</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                                <li><a class="item-select"><span>tim kiem 3</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                                <li><a class="item-select"><span>tim kiem 4</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                                <li><a class="item-select"><span>tim kiem 5</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                                <li><a class="item-select"><span>tim kiem 6</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                                <li><a class="item-select"><span>tim kiem 7</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                                <li><a class="item-select"><span>tim kiem 8</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- modal search city -->
        <div class="modal fade searchModal" id="searchCity" role="dialog">
            <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Chọn khu vực</h4>
                    </div>
                    <div class="modal-body">
                        <ul class="parent-menu">
                            <li><a class="next"><span>Tất cả</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                            <li><a class="next"><span>Da nang</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                            <li><a class="next"><span>Quang nam</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                        </ul>
                        <!-- sub menu -->
                        <div class="sub-menu" style="display: none;">
                            <ul>
                                <li><a><span>Tất cả 1</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                                <li><a class="item-select"><span>Hai chau</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                                <li><a class="item-select"><span>Thanh khe</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                                <li><a class="item-select"><span>Lien Chieu</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                                <li><a class="item-select"><span>Ngu Hanh son</span><i class="fa fa-angle-right fa-5 pull-right"></i></a></li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        <!--  -->
        <script src="assets/js/script.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <!-- share social -->
        <script type="text/javascript">
                                function genericSocialShare(url) {
                                    window.open(url, 'sharer', 'toolbar=0,status=0,width=648,height=395');
                                    return true;
                                }
        </script>
        <script type="text/javascript">
            $(document).ready(function () {
                // show submenu next
                $(".modal-body ul li a.next").click(function () {
                    if ($(this).hasClass("sub-next")) {
                        $(".pull-left").addClass('back-parent');
                        $(".sub-menu-s").show();
                        $(".sub-menu").hide();
                    } else {
                        $("<div class='pull-left'><i class='fa fa-arrow-left'></i></div>").insertBefore("h4");
                        $(".parent-menu").hide();
                        $(".sub-menu").show();
                    }
                });
                // show parentmenu
                $(document).on('click', '.pull-left', function () {
                    if ($(this).hasClass("back-parent")) {
                        $(".pull-left").removeClass('back-parent');
                        $(".sub-menu-s").hide();
                        $(".sub-menu").show();
                    } else {
                        $(".parent-menu").show();
                        $(".sub-menu").hide();
                    }
                });
                // select item search
                $(document).on('click', '.item-select', function () {
                    var data = $(this).find("span").text();

                    if ($('#searchItem').hasClass('in')) {
                        $('#selectItem').text(data);
                    } else
                    if ($('#searchCity').hasClass('in')) {
                        $('#selectCity').text(data);
                    }
                    $('.searchModal').modal('hide');
                });
                $('.searchModal').on('hidden.bs.modal', function (e) {
                    $(".modal-body ul").show();
                    $(".modal-body div").hide();
                    $(".pull-left").remove();
                });
            });
        </script>
    </body>

</html>