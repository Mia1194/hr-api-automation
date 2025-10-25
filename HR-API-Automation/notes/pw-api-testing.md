



POST /employees       → Create new employee
GET /employees/{id}   → Verify created
PATCH /employees/{id} → Partially update (salary, phone)
PUT /employees/{id}   → Full update
DELETE /employees/{id}→ Delete
GET /employees/{id}   → Expect 404


## Playwrite Concepts Used
- `request`        ->
- ` `
- ` `
- ` ` 
- ` `
- ` `


# Good Takeaways From Our Framework
- 
- Use helper(util) class instead of writing
- Use unique test data e.g., random email/ID.
- Validate both status and body atructure.
- Clean up created test data.
- Write tests to be idempotent -> safe to re-run.
- 
