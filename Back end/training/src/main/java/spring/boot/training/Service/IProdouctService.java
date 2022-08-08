package spring.boot.training.Service;

import java.util.List;

import spring.boot.training.Entity.Product;

public interface IProdouctService {

	Product addProduct(Product p);
	Product updateProduct(Long productId, Product p);
	void deleteProduct(Long productId);
	Product consultProductById(Long productId);
	List<Product> consultAllProducts();

}
