export function Item({link, name, price}) {
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', maxWidth: '300px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <img src={link} alt={name} style={{ width: '100%', borderRadius: '8px 8px 0 0' }} />
            <div style={{ padding: '8px' }}>
                <h3 style={{ margin: '8px 0' }}>{name}</h3>
                <p style={{ color: '#555', fontWeight: 'bold' }}>${price}</p>
            </div>
        </div>
    );
}