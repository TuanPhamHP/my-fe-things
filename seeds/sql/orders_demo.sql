-- =============================================================
-- Seed: orders_demo
-- Dùng cho: sql-indexed (Index performance demo)
-- Ghi chú: dùng stored procedure để insert 1 triệu dòng
-- =============================================================

DROP TABLE IF EXISTS orders_demo;

CREATE TABLE orders_demo (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT           NOT NULL,
    product     VARCHAR(100)  NOT NULL,
    amount      DECIMAL(10,2) NOT NULL,
    status      ENUM('pending', 'processing', 'shipped', 'delivered') NOT NULL,
    created_at  DATETIME      NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Stored procedure batch insert 1000 dong/lan
DROP PROCEDURE IF EXISTS sp_seed_orders_demo;

DELIMITER $$
CREATE PROCEDURE sp_seed_orders_demo(IN total INT)
BEGIN
    DECLARE i INT DEFAULT 0;
    SET autocommit = 0;

    WHILE i < total DO
        INSERT INTO orders_demo (customer_id, product, amount, status, created_at)
        SELECT
            FLOOR(RAND() * 100000) + 1,
            ELT(FLOOR(RAND() * 5) + 1, 'Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'),
            ROUND(RAND() * 9900 + 100, 2),
            ELT(FLOOR(RAND() * 4) + 1, 'pending', 'processing', 'shipped', 'delivered'),
            DATE_SUB(NOW(), INTERVAL FLOOR(RAND() * 730) DAY)
        FROM (
            SELECT a.N + b.N * 10 + c.N * 100 AS n
            FROM (SELECT 0 AS N UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4
                  UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) a
            CROSS JOIN (SELECT 0 AS N UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4
                        UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) b
            CROSS JOIN (SELECT 0 AS N UNION SELECT 1 UNION SELECT 2 UNION SELECT 3 UNION SELECT 4
                        UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9) c
        ) nums;

        SET i = i + 1000;

        IF MOD(i, 100000) = 0 THEN
            COMMIT;
        END IF;
    END WHILE;

    COMMIT;
    SET autocommit = 1;
END$$
DELIMITER ;

-- Chay seed (~5-10 giay)
CALL sp_seed_orders_demo(1000000);

-- Kiem tra
SELECT COUNT(*) AS tong_dong FROM orders_demo;
