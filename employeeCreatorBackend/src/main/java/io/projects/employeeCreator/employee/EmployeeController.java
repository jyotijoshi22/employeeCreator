package io.projects.employeeCreator.employee;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("http://127.0.0.1:5173/")
@RestController
@RequestMapping("/api")

public class EmployeeController {
	@Autowired
	private EmployeeService service;
	
	
	//get all employees
	@GetMapping("/employee")
	public ResponseEntity<List<Employee>> getAll(){
		
		List<Employee> allEmployee = this.service.getAll();
		
		return new ResponseEntity<>(allEmployee, HttpStatus.OK);
		
	}

	
	
	//get an employee by id
		@GetMapping("/employee/{id}")
		public ResponseEntity<Employee> getById(@PathVariable Long id) {
			Optional<Employee> maybeEmployee = this.service.getById(id);
			
			if (maybeEmployee.isEmpty()) {
				return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
			} else {
				return new ResponseEntity<>(maybeEmployee.get(), HttpStatus.FOUND);
			}
		}
		
		
		
//create  new employee
	@PostMapping("/create")
	public ResponseEntity<Employee> create( @RequestBody EmployeeCreateDTO data) {
		
		Employee createdEmployee = this.service.create(data);
		
		return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/employee/{id}")
	public ResponseEntity<Void> delete(@PathVariable("Id") Long id) {
	    this.service.delete(id);
	    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
}
