import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Cuộn về đầu trang ngay lập tức khi route thay đổi
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Đảm bảo hành động tức thì
    });
  }, [location]);

  return null;
};

export default ScrollToTop;
