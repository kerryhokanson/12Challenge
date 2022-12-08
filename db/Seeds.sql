INSERT INTO department (id, name)
VALUES (1, 'marketing'),
        (2, 'operations'),
        (3, 'accounting'),
        (4  , 'legal'),
        (5 , 'environment');

INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'head of Sales', 70000, 1),
        (2, 'Cheif Legal Officer', 80000, 4),
        (3, 'Sales Manager', 83000, 4),
        (4, 'logistics coordinator', 82000, 2),
        (5, 'accountant', 69500, 3),
        (6, 'field data collector', 70000, 5),
        (7, 'lawyer', 80000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'jamie', 'solsbury', 7, null),
        (2, 'sophie', 'ellsworth', 2, null),
        (3, 'bob', 'tucker', 3, null),
        (4, 'liz', 'frounhaur', 5, null),
        (5, 'adam', 'jocbson', 7, 2),
        (6, 'john', 'eljingleheimer', 4, null),
        (7, 'joseph', 'wondergem', 1, null),
        (8, 'paul', 'dinglebop', 6, null),
        (9, 'rasbutten', 'ofEdinburg', 4, null),
        (10, 'bilbo', 'baggins', 7, null);
        

