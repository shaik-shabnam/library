package com.nec.controller;


import java.util.*;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nec.entity.Book;
import com.nec.service.BookService;

@RestController
@RequestMapping("/api/books")
public class BookController {
	private BookService service;

	public BookController(BookService service) {
		this.service = service;
	}
	
	
	@GetMapping
	public List<Book> getAllBooks(){
		return service.getAllBooks();
	}
	
	@GetMapping("/{id}")
	public Optional<Book> getBookById(@PathVariable Long id){
		return service.getBookById(id);
		
	}
	
	@PostMapping
	public Book addBook(@RequestBody Book book) {
		return service.add(book);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		service.deleteBook(id);
	}
	
	@PutMapping("/{id}")
	public Book update(@PathVariable Long id,@RequestBody Book book) {
	 return service.updateBook(id,book);
	}
	

}
