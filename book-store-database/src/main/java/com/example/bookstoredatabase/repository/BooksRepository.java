package com.example.bookstoredatabase.repository;

import com.example.bookstoredatabase.model.Books;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
//JPARepository : JPA specific extension fpr Repository
public interface BooksRepository extends JpaRepository<Books, Long> {

}
