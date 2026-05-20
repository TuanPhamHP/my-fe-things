-- =============================================================
-- Seed: san_pham
-- Dùng cho: sql-statements (Control Flow Statements demo)
-- =============================================================

DROP TABLE IF EXISTS san_pham;

CREATE TABLE san_pham (
    id       INT AUTO_INCREMENT PRIMARY KEY,
    ten      VARCHAR(100)  NOT NULL,
    gia      DECIMAL(10,2) NOT NULL,
    ton_kho  INT           NOT NULL DEFAULT 0,
    danh_muc VARCHAR(50)   NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO san_pham (ten, gia, ton_kho, danh_muc) VALUES
('Laptop Dell XPS',    22000000,  5, 'dien-tu'),
('iPhone 15',          20000000,  3, 'dien-tu'),
('Samsung Galaxy S24', 17000000,  8, 'dien-tu'),
('Monitor LG 27 inch',  6500000,  0, 'dien-tu'),   -- het hang
('Ban phim co',           850000, 30, 'phu-kien'),
('Chuot Logitech MX',     420000, 25, 'phu-kien'),
('Tai nghe Sony WH',    1500000,  12, 'phu-kien'),
('SSD Samsung 1TB',     2200000,  18, 'luu-tru'),
('RAM Corsair 16GB',    1600000,  22, 'luu-tru'),
('USB Hub 7 cong',        320000,  0, 'phu-kien');  -- het hang

-- Kiem tra
SELECT * FROM san_pham;
