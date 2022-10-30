import React from 'react'

const UseStateDerivedStates = () => {
    //const [selectedProduct, setSelectedProduct] = React.useState(null);

    const [products, setProducts] = React.useState([
        {id: 1, title: "shirt", quantity: 1},
        {id: 2, title: "jeans", quantity: 1},
        {id: 3, title: "shoe", quantity: 1},
        {id: 4, title: "hat", quantity: 1},
    ]);

    const [selectedId, setSelectedId] = React.useState(null);
    const selectedProduct = products.find((p) => p.id === selectedId);

    const handleChoose = (id) => {
        // const product = products.find(p => p.id === id);
        // setSelectedProduct(product);
        setSelectedId(id);
    };

    const increment = (id) => {   
        setProducts((prev) => {
            return prev.map((product) => {
                if (product.id === id) {
                    return {...product, quantity: product.quantity+1};
                } else return product;
            });
        });
    };

    return (
        <React.Fragment>
            <div>
                <h1>UseStateDerivedStates</h1>
                <div>
                    <h4>All products</h4>
                    {products.map((product) => 
                        (
                            <div key={product.id}>
                                <div>
                                    {product.title}
                                    <button onClick={() => handleChoose(product.id)}>Choose</button>
                                </div>  
                                <div>
                                    <button>-</button>
                                    <div>{product.quantity}</div>
                                    <button onClick={() => increment(product.id)}>+</button>
                                </div>
                            </div>
                        )
                    )}
                </div>  
                <h4>Chosen products</h4>
                <div>{selectedProduct?.title}</div>
                <div>{selectedProduct?.quantity}</div>
            </div>
        </React.Fragment>
    )
}

export default UseStateDerivedStates