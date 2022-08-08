package spring.boot.training.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import spring.boot.training.Entity.Product;
import spring.boot.training.Repository.ProductRepository;

@Service
public class ProductService implements IProdouctService{

	@Autowired
	ProductRepository productRepository;

	@Override
	public Product addProduct(Product p) {
		return productRepository.save(p);
	}

	@Override
	public Product updateProduct(Long productId, Product p) {
		p.setId(productId);
		return productRepository.save(p);
	}

	@Override
	public void deleteProduct(Long productId) {
		productRepository.deleteById(productId);
	}

	@Override
	public Product consultProductById(Long productId) {
		return productRepository.findById(productId).get();
	}

	@Override
	public List<Product> consultAllProducts() {
		return productRepository.findAll();
	}
	
}
