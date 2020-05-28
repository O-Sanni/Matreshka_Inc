package com.example.bookstoredatabase.repository;

import com.example.bookstoredatabase.model.Gifts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GiftsRepository extends JpaRepository<Gifts, Long> {
}
