import React from 'react';
// کامپوننت‌های React Swiper را وارد کنید
import { Swiper, SwiperSlide } from 'swiper/react';

// ماژول‌های Swiper را وارد کنید
import { Parallax, Navigation, Pagination } from 'swiper/modules';

// استایل‌های Swiper را وارد کنید
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/parallax'; // برای افکت‌های پارالاکس ضروری است

export default function MyParallaxSwiper() {
  const slidesContent = [
    {
      id: 1,
      title: 'اسلاید اول',
      subtitle: 'عنوان فرعی اول',
      text: 'این محتوای اسلاید اول است. افکت پارالاکس را روی عناصر مختلف نشان می‌دهد.',
      backgroundImage: 'https://swiperjs.com/demos/images/nature-1.jpg',
    },
    {
      id: 2,
      title: 'اسلاید دوم',
      subtitle: 'عنوان فرعی دوم',
      text: 'این متن برای اسلاید دوم است. تصویر پس‌زمینه نیز با اسلاید جابجا می‌شود.',
      backgroundImage: 'https://swiperjs.com/demos/images/nature-2.jpg',
    },
    {
      id: 3,
      title: 'اسلاید سوم',
      subtitle: 'عنوان فرعی سوم',
      text: 'و در نهایت، متن اسلاید سوم. از انتقال‌های روان و عمق لذت ببرید!',
      backgroundImage: 'https://swiperjs.com/demos/images/nature-3.jpg',
    },
  ];

  return (
    <Swiper
      speed={600} // سرعت انیمیشن
      parallax={true} // فعال کردن افکت پارالاکس
      pagination={{ clickable: true }} // اضافه کردن نقطه‌های صفحه‌بندی قابل کلیک
      navigation={true} // اضافه کردن فلش‌های ناوبری (قبلی/بعدی)
      modules={[Parallax, Pagination, Navigation]} // ماژول‌های مورد نیاز را بارگذاری کنید
      className="mySwiper" // یک کلاس سفارشی برای استایل‌دهی
    >
      {/* پس‌زمینه پارالاکس - باید خارج از SwiperSlide باشد و از slot="container-start" استفاده کند */}
      <div
        slot="container-start"
        className="parallax-bg"
        style={{
          backgroundImage: `url(${slidesContent[0].backgroundImage})`, // تنظیم تصویر پس‌زمینه اولیه
        }}
        data-swiper-parallax="-23%"
      ></div>

      {slidesContent.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="title" data-swiper-parallax="-100">
            {slide.title}
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            {slide.subtitle}
          </div>
          <div
            className="text"
            data-swiper-parallax="-300"
            data-swiper-parallax-duration="600"
          >
            {slide.text}
          </div>
          <div data-swiper-parallax-opacity="0.5">من شفافیت را تغییر خواهم داد</div>
          <div data-swiper-parallax-scale="0.15">من مقیاس را تغییر خواهم داد</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}