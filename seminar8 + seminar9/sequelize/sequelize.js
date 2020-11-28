import Sequelize from 'sequelize'; //export default

//configurari
const sequelize = new Sequelize(
    "seminar8TW", "sa", "sa", {
        //informatiile serverului catre care sa se conecteze
        host: "localhost",
        dialect: "mssql",
        dialectOptions: {
            options: {
                trustedConnection: true,
                enableArithAbort: true
            }
        }
    });

//crearea unei entitati(tabela)
export const Orders = sequelize.define('Orders', {
    //definim toate coloeanele tabelei
    OrderId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    Title: {
        type: Sequelize.STRING,
    },
    Quantity: {
        type: Sequelize.DECIMAL(18, 2)
    },
    Message: {
        type: Sequelize.STRING,
    },
    City: {
        type: Sequelize.STRING,
    }
});

export const Products = sequelize.define('Products', {
    ProductId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    ProductName: {
        type: Sequelize.STRING
    },
    ProductPrice: {
        type: Sequelize.DECIMAL(18, 2)
    }
});

export const Books = sequelize.define('Books', {
    BookId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    BookName: {
        type: Sequelize.STRING
    }
});

export const Authors = sequelize.define('Authors', {
    AuthorId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    AuthorName: {
        type: Sequelize.STRING
    }
});

export const AuthorsXBooks = sequelize.define('AuthorsXBooks', {
    Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }
});

//relatii many to many
Books.belongsToMany(Authors, { through: { model: AuthorsXBooks }, foreignKey: 'BookId', foreignKeyConstraint: true });
Authors.belongsToMany(Books, { through: { model: AuthorsXBooks }, foreignKey: 'AuthorId', foreignKeyConstraint: true });



Orders.hasMany(Products, { foreignKey: 'OrderId', foreignKeyConstraint: true });
//Products.belongsTo(Orders, { foreignKey: 'OrderId', foreignKeyConstraint: true });

//conectarea sequelize
sequelize.authenticate()
    .then(() => {
        console.log('Sequelize has connected successfully to the database!')
    })
    .catch(err => console.error('Unable to connect to the database: ' + err));

sequelize
    .sync({ force: false, alter: false })
    .then(() => console.log('Sync completed!'))
    .catch(err => console.log('Error at creating: ' + err));

//force - se asigura ca tabela va fi suprascrisa mereu
//alter - se asigura ca orice modificare adusa tabelei se modifica asupra tabelei din bd