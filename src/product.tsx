const products = ['Đèn Trung Thu'];

function ProductList() {
    return (
        <section className="products-section" aria-label="Danh sách sản phẩm">
            <h2>Danh sách sản phẩm</h2>
            <ul className="product-list">
                {products.map((name) => <li key={name}>{name}</li>)}
            </ul>
        </section>
    );
}

export default ProductList;