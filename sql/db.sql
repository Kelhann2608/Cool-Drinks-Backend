CREATE DATABASE cool_drinks;
USE cool_drinks;

CREATE TABLE IF NOT EXISTS `cool_drinks`.`admins` (
  `id_admin` INT NOT NULL AUTO_INCREMENT,
  `lastname` VARCHAR(100) NOT NULL,
  `firstname` VARCHAR(100) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `admin` TINYINT(0) DEFAULT 1,
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
 VALUES ('Espresso', 'Café court obtenu par infusion de grains de café moulus dans une faible quantité d_eau bouillante', 'https://www.nespresso.com/ecom/medias/sys_master/public/12137933668382/responsive-pdp-main-6272x2432.jpg?impolicy=productPdpSafeZone&imwidth=1238', 1),
('Macchiato', 'Espresso auquel on ajoute une cuillère de mousse de lait', 'https://assets.afcdn.com/recipe/20181203/84501_w1024h1024c1cx1666cy2223.jpg', 1),
('Cappuccino', 'Café italien composé à part égales d_espresso de lait chaud et de mousse de lait', ' https://assets.afcdn.com/recipe/20160919/20976_w1024h1024c1cx2624cy1749.webp', 1),
('Mokaccino', 'Mariage réussi de chocolat de lait chaud de crème fouettée et d_espresso', ' https://www.cafe-italien.ch/wp-content/uploads/compatible-nespresso-mokaccino.jpg', 1),
('Irish coffee', 'Mélange subtil d_espresso de sucre granulé de crème fouettée et de wisky irlandais', 'https://uploads-ssl.webflow.com/603e7f3219462c686bd2bb29/606c5e8f94edde7f1fd709df_irish-coffee-main.jpeg', 1),
('Affogato', 'Ce classique de la gastronomie italienne se prépare en versant un espresso bien chaud sur une glace à la vanille', 'https://media.soscuisine.com/images/recettes/232.jpg', 1),
('Smoothie banane et miel', 'smoothie à base de banane avec une cuillère à café de miel et un zeste de citron', 'https://assets.afcdn.com/recipe/20131009/63238_w1024h1024c1cx1872cy2657.webp', 2),
('Smootie fraise-mangue-banane', 'Smoothie avec une belle dose de fruits frais mariant la banane à la mangue et à la fraise', 'https://img.cuisineaz.com/660x660/2018/08/22/i141817-.jpeg ', 2),
('Smoothie banane-cacao', 'Cette recette vous propose une version banane cacao gourmande velouté et rafraichissante', 'https://www.sportdiet.fr/wp-content/uploads/2019/01/My-Post-3-e1552495447211.jpg?x36917', 2),
('Smoothie pomme-banane-kiwi', 'Le kiwi la banane et la pomme s_associe à merveille dans ce joli smoothie coloré et acidulé', 'https://img.cuisineaz.com/660x660/2018/09/02/i142243-smoothie-pomme-banane-kiwi.webp', 2),
('Smoothie aux fruits rouges', 'Que l_on soit plutôt cassis mûres ou framboises chacun trouve son bonheur avec ce smoothie aux fruits rouges', 'https://assets.afcdn.com/recipe/20160321/21168_w800h600c1cx2677cy1784.jpg', 2),
('Smoothie pomme-cerise', 'Véritable boisson printanière ce smoothie pomme cerise ne vous laissera pas indifférent', 'https://img.cuisineaz.com/660x660/2013/12/20/i25687-smoothie-pomme-cerise.jpg ', 2),
('Beignets à la confiture', 'Des beignets fait maison à la fraise la pomme la framboise et l_abricot', 'https://img.cuisineaz.com/660x660/2015/07/27/i89822-beignets-fourres-a-la-confiture.jpg', 3),
('Cookies', 'Cookies aux pépites de chocolat aux noix de pécans', 'https://img.cuisineaz.com/2015-11-05/i71617-recette-des-cookies-moelleux-aux-pepites-de-chocolat.jpg ', 3),
('Brownies', 'Brownies aux pépites de chocolat à la noix de pécans', 'https://www.hervecuisine.com/wp-content/uploads/2015/10/brownies.jpg ', 3),
('Muffins', 'Muffins aux pépites de chocolat aux fruits rouges aux caramel','https://www.papillesetpupilles.fr/wp-content/uploads/2005/07/Muffins-aux-pe%CC%81pites-de-chocolat-%C2%A9-Elena-Shashkina-Shutterstock.jpg', 3),
('Torsades aux chocolat', 'Torsades à la crèmes et aux pépites de chocolat', 'https://img.cuisineaz.com/660x660/2015/07/27/i93987-torsades-au-chocolat.jpg', 3),
('Paris-Brest', 'Pâte à choux croquante fourrée d_une crème aux praliné parsemée d_amandes','https://www.atelierdeschefs.com/media/recette-e32634-paris-brest-mousseline-praline.jpg', 3);


