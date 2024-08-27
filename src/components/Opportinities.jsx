import { Wrapper } from "../assets/wrappers/Opportunities";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Typography, Paper } from "@mui/material";
// Імпортуємо стилі для Swiper
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const opportunities = [
  "Backend Engineer",
  "Product Designer",
  "Frontend Engineer",
  "Project Manager",
  "Finance Director",
  "Backend Engineer",
  "Product Designer",
  "Frontend Engineer",
  "Project Manager",
  "Finance Director",
];

const styles = {
  sliderContainer: {
    width: "100%",
    overflow: "hidden",
    userSelect: "none",
  },
  swiperSlide: {
    display: "inline-block",
    padding: "0 10px",
    minWidth: "auto", // Використовуйте autoWidth для автоматичної ширини
    maxWidth: "auto",
    whiteSpace: "nowrap", // Запобігає переносу тексту
    border: "none", // Прибирає бордер
    boxSizing: "border-box",
  },
};

const Opportinities = () => {
  return (
    <Wrapper>
      <h2 className="opportunities__title">kickstart your tech career</h2>
      <p className="opportunities__subtitle">
        We're always on the lookout for bright strategic minds, creative
        superstars and coding gurus. Select one of our current opportunities
        below to apply.
      </p>
      <Box
        sx={{ width: "100%", margin: "0 auto 150px", mt: 4 }}
        style={styles.sliderContainer}
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20} // Відступи між слайдами
          slidesPerView={5} // Кількість слайдів на екрані
          autoplay={{ delay: 3000 }} // Автоплей
          navigation // Стрілки навігації
          loop={true}
        >
          {opportunities.map((item, index) => (
            <SwiperSlide key={index} style={styles.swiperSlide} sx={{}}>
              <Paper
                elevation={3}
                sx={{
                  padding: "16px 36px",
                  textAlign: "center",
                  border: "none !important",
                  borderRadius: "8px",
                }}
              >
                <Typography
                  variant="p"
                  color="primary"
                  sx={{
                    fontSize: "15px",
                    color: "#0A8BFE",
                  }}
                >
                  {item}
                </Typography>
              </Paper>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Wrapper>
  );
};
export default Opportinities;
