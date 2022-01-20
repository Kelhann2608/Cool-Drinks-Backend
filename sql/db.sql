CREATE DATABASE cool_drinks;
USE cool_drinks;

CREATE TABLE IF NOT EXISTS `cool_drinks`.`admins` (
  `id_admin` INT NOT NULL AUTO_INCREMENT,
  `lastname` VARCHAR(100) NOT NULL,
  `firstname` VARCHAR(100) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `admin` TINYINT(1) NULL DEFAULT 0,
  PRIMARY KEY (`id_admin`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `cool_drinks`.`products` (
  `id_product` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `id_category` INT NOT NULL,
  PRIMARY KEY (`id_product`),
  INDEX `fk_product_category_idx` (`id_category` ASC) VISIBLE,
  CONSTRAINT `fk_product_admin`
    FOREIGN KEY (`id_category`)
    REFERENCES `cool_drinks`.`category` (`id_category`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `cool_drinks`.`categories` (
  `id_category` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `id_admin` INT NOT NULL,
  PRIMARY KEY (`id_category`),
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;




INSERT INTO categories(name)
VALUES('boissons chaudes'),('boissons froides'),('gourmandises');


INSERT INTO products (name,description,image,id_category)
 VALUES ('Espresso', 'Café court obtenu par infusion de grains de café moulus dans une faible quantité d_eau bouillante', 'assets/Espresso.jpg', 1),
('Macchiato', 'Espresso auquel on ajoute une cuillère de mousse de lait', 'assets/le-macchiato.jpg', 1),
('Cappuccino', 'Café italien composé à part égales d_espresso de lait chaud et de mousse de lait', 'assets/cappuccino.jpg', 1),
('Mokaccino', 'Mariage réussi de chocolat de lait chaud de crème fouettée et d_espresso', 'assets/mokaccino.jpg', 1),
('Irish coffe', 'Mélange subtil d_espresso de sucre granulé de crème fouettée et de wisky irlandais', 'assets/irish-coffe.jpg', 1),
('Affogato', 'Ce classique de la gastronomie italienne se prépare en versant un espresso bien chaud sur une glace à la vanille', 'assets/affogato.jpg', 1),
('Smoothie banane et miel', 'smoothie à base de banane avec une cuillère à café de miel et un zeste de citron', 'assets/smoothie banane miel.jpg', 2),
('Smootie fraise-mangue-banane', 'Smoothie avec une belle dose de fruits frais mariant la banane à la mangue et à la fraise', 'assets/smoothie-fraise-mangue-banane.jpg', 2),
('Smoothie banane-cacao', 'Cette recette vous propose une version banane cacao gourmande velouté et rafraichissante', 'assets/smoothie-banane-cacao.jpg', 2),
('Smoothie pomme-banane-kiwi', 'Le kiwi la banane et la pomme s_associe à merveille dans ce joli smoothie coloré et acidulé', 'assets/smoothie-pomme-banane-kiwi.jpg', 2),
('Smoothie aux fruits rouges', 'Que l_on soit plutôt cassis mûres ou framboises chacun trouve son bonheur avec ce smoothie aux fruits rouges', 'assets/smoothie aux fruits rouges.jpg', 2),
('Smoothie pomme-cerise', 'Véritable boisson printanière ce smoothie pomme cerise ne vous laissera pas indifférent', 'assets/smoothie pomme cerise.jpg', 2),
('Beignets à la confiture', 'Des beignets fait maison à la fraise la pomme la framboise et l_abricot', 'assets/beignets à la confiture.jpg', 3),
('Cookies', 'Cookies aux pépites de chocolat aux noix de pécans', 'assets/Cookies.jpg', 3),
('Brownies', 'Brownies aux pépites de chocolat à la noix de pécans', 'assets/brownies.jpg', 3),
('Muffins', 'Muffins aux pépites de chocolat aux fruits rouges aux caramel','assets/muffin.jpg', 3),
('Torsades aux chocolat', 'Torsades à la crèmes et aux pépites de chocolat', 'assets/torsades aux chocolat.jpg', 3),
('Paris-Brest', 'Pâte à choux croquante fourrée d_une crème aux praliné parsemée d_amandes','assets/paris-brest.jpg', 3);

INSERT INTO admins (lastname,firstname,email,password,admin) VALUES ('Mayoral', 'Joseph', 'joseph.mayoral@wildcodeschool.com', 'Wilddrinks7', 1);
