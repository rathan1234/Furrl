import "./index.css";

const ProductList = (props) => {
  const { item, index } = props;

  const share = async (event) => {
    event.stopPropagation();

    try {
      const data = {
        title: `${item.title}`,
        text: `I found this amazing product from a unique, new-age brand on Furrl - ${item.title}`,
        url: `https://furrl.in/productDetail?id=${item.id}`,
      };

      await navigator.share(data);
    } catch (err) {
      console.log(err);
    }
  };

  const redirect = () => {
    window.location.href = `https://furrl.in/productDetail?id=${item.id}&ref=vibeResults_HomeHunts`;
  };

  const desktopView = window.innerWidth >= 576;

  const fullWidthProduct = desktopView ? false : index % 5 === 2;

  return (
    <li
      onClick={redirect}
      key={item["id"]}
      className={`product-item ${fullWidthProduct && "product-item-single"}`}
    >
      <img
        loading="lazy"
        className={`product-img ${fullWidthProduct && "product-img-single"}`}
        src={item["images"][0]["src"]}
        alt={item["title"]}
      />
      <div className="product-details-container">
        <img
          src="/assets/share.svg"
          alt="share"
          onClick={share}
          className={`share-icon ${fullWidthProduct && "share-icon-single"}`}
        />

        <p className="vendor-name">{item["brand"][0]["name"]}</p>
        <p className="vendor-name product-name">{item["title"]}</p>
        <p className="vendor-name product-name product-price">
          {`Rs. ${item["price"]["value"]}`}{" "}
          <span className="product-mrp">{`Rs. ${item["MRP"]["value"]}`}</span>
          <span className="product-discount">{`${item["discountPercent"]}%`}</span>
        </p>
      </div>
    </li>
  );
};

export default ProductList;
