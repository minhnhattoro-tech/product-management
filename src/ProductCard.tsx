function ProductCard(props: { name: string; price: number; category: string }) {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '12px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#0072ce' }}>{props.name}</h3>
      <p style={{ margin: '4px 0' }}>Danh mục: <strong>{props.category}</strong></p>
      <p style={{ margin: '4px 0', color: '#d32f2f' }}>
        Giá: <strong>{props.price.toLocaleString('vi-VN')} VNĐ</strong>
      </p>
      <button style={{ marginTop: '8px', padding: '6px 12px', cursor: 'pointer' }}>
        Xem chi tiết
      </button>
    </div>
  );
}

export default ProductCard;