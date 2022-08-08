package spring.boot.training.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import spring.boot.training.Entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
