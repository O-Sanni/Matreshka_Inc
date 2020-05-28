package com.example.bookstoredatabase.repository;

import com.example.bookstoredatabase.model.Subscribe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubscribeRepository extends JpaRepository<Subscribe, Long>{
}
