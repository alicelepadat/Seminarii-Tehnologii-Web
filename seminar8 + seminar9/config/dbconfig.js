//ne definim configurarea pe care o folosim in accesul bd

export const config = {
        user: "sa",
        password: "sa",
        server: "DESKTOP-CR73G22\\SQLEXPRESS",
        database: "seminar8TW",
        options: {
            trustedConnection: true,
            enableArithAbort: true //in cazul in care apare erori la un querry, acesta isi face rollback(la impartirea cu 0 sau la overflow)
        },
        port: 1433
    }
    //export default config;

//acest proiect implica doua servere:
//1  - comunica cu bd
//2  - comunica cu partea de sqlise pt bd