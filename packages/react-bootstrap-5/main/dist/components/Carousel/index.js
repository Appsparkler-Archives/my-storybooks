"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Carousel = function Carousel() {
  return /*#__PURE__*/React.createElement("div", {
    id: "carouselExampleControls",
    className: "carousel slide",
    "data-bs-ride": "carousel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "carousel-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "carousel-item active"
  }, /*#__PURE__*/React.createElement("img", {
    src: "http://placekitten.com/600/200?image=1",
    className: "d-block w-100",
    alt: "600X200"
  })), /*#__PURE__*/React.createElement("div", {
    className: "carousel-item"
  }, /*#__PURE__*/React.createElement("img", {
    src: "http://placekitten.com/600/200?image=2",
    className: "d-block w-100",
    alt: "600X200"
  })), /*#__PURE__*/React.createElement("div", {
    className: "carousel-item"
  }, /*#__PURE__*/React.createElement("img", {
    src: "http://placekitten.com/600/200?image=3",
    className: "d-block w-100",
    alt: "600X200"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "carousel-control-prev",
    type: "button",
    "data-bs-target": "#carouselExampleControls",
    "data-bs-slide": "prev"
  }, /*#__PURE__*/React.createElement("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "visually-hidden"
  }, "Previous")), /*#__PURE__*/React.createElement("button", {
    className: "carousel-control-next",
    type: "button",
    "data-bs-target": "#carouselExampleControls",
    "data-bs-slide": "next"
  }, /*#__PURE__*/React.createElement("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "visually-hidden"
  }, "Next")));
};

var _default = Carousel;
exports["default"] = _default;