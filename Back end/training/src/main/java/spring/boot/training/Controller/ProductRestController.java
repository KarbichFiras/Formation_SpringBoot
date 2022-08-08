package spring.boot.training.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import spring.boot.training.Entity.Product;
import spring.boot.training.Service.IProdouctService;

@RestController
public class ProductRestController {

	@Autowired
	IProdouctService prodouctService;

	@PostMapping("/addProduct")
	public Product addProduct(@RequestBody Product p) {
		return prodouctService.addProduct(p);
	}

	@PutMapping("/updateProduct")
	public Product updateProduct(@RequestParam(name="productId") Long productId, @RequestBody Product p) {
		return prodouctService.updateProduct(productId, p);
	}

	@DeleteMapping("/deleteProduct")
	public void deleteProduct(@RequestParam(name="productId") Long productId) {
		prodouctService.deleteProduct(productId);
	}

	@GetMapping("/consultProductById")
	public Product consultProductById(@RequestParam(name="productId") Long productId) {
		return prodouctService.consultProductById(productId);
	}

	@GetMapping("/consultAllProducts")
	public List<Product> consultAllProducts() {
		return prodouctService.consultAllProducts();
	}
	
	
	
}
