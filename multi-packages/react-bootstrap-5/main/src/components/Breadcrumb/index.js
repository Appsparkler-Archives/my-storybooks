import PropTypes from "prop-types";

const BreadcrumbItem = ({ text, active, ariaLabel, href }) => (
  <li
    className={`breadcrumb-item ${active ? "active" : ""}`}
    aria-current={ariaLabel}
  >
    {!active ? <a href={href}>{text}</a> : text}
  </li>
);

const BreadcrumbList = ({ items }) =>
  items.map(({ id, ...item }) => <BreadcrumbItem key={id} {...item} />);

const Breadcrumb = ({ items, ariaLabel }) => (
  <nav aria-label={ariaLabel}>
    <ol className="breadcrumb">
      <BreadcrumbList items={items} />
    </ol>
  </nav>
);

Breadcrumb.propTypes = {
  ariaLabel: PropTypes.string,
  items: PropTypes.arrayOf({
    id: PropTypes.string,
    text: PropTypes.string,
    active: PropTypes.bool,
    ariaLabel: PropTypes.string,
  }),
};

export default Breadcrumb;
