package com.example.backend;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(
        origins = {"*"}
)
@RestController
public class Tracker {
    List<Expense> expenses = new ArrayList();

    @PostMapping({"/expenses"})
    public String addExpens(@RequestBody Expense exp) {
        this.expenses.add(exp);
        return "expense added";
    }

    @GetMapping({"/expenses"})
    public List<Expense> getAllExpenses() {
        return this.expenses;
    }

    @DeleteMapping({"/expenses/{id}"})
    public String deleteExpense(@PathVariable int id) {
        this.expenses.removeIf((e) -> e.getId() == id);
        return "Deleted";
    }
}
