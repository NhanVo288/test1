import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import Odometer from "odometer";
import "odometer/themes/odometer-theme-default.css"; 

export default function CountUpNumber({
  value = 0,
  duration = 2000, 
  format = "(,ddd)", 
  style = {},
  ...props
}) {
  const odometerRef = useRef(null);
  const odometerInstanceRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Intersection Observer để phát hiện vào view
  useEffect(() => {
    const node = odometerRef.current;
    if (!node) return undefined; // <--- thêm dòng này để không lỗi eslint
  
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
  
    return () => observer.disconnect();
  }, []);
  

  // Khởi tạo Odometer instance
  useEffect(() => {
    if (odometerRef.current && !odometerInstanceRef.current) {
      odometerInstanceRef.current = new Odometer({
        el: odometerRef.current,
        value: 0,
        format,
        duration,
      });
    }
  }, [format, duration]);

  // Khi vào view, mới update Odometer lên giá trị thật
  useEffect(() => {
    if (odometerInstanceRef.current) {
      if (isInView) {
        odometerInstanceRef.current.update(value);
      } else {
        odometerInstanceRef.current.update(0); // reset về 0 khi chưa vào view
      }
    }
  }, [isInView, value]);

  return (
    <span
      ref={odometerRef}
      style={{
        fontFamily: "'Martel', serif",
        ...style,
      }}
      {...props}
    />
  );
}

CountUpNumber.propTypes = {
  value: PropTypes.number.isRequired,
  duration: PropTypes.number,
  format: PropTypes.string,
  style: PropTypes.object
};
