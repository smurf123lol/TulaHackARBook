import 'package:flutter/material.dart';

import 'BookDetailsView.dart';

class BookListElement {
  const BookListElement(this.name, this.author, this.id, this.img);

  final String name, author, id, img;

  Card GetTile(BuildContext context) {
    return Card(
        elevation: 0,
        color: Colors.transparent,
        child: InkWell(
          onTap: () => Navigator.pushNamed(context, BookDetailsView.routeName,
              arguments: BookDetailsArgs(this.id)),
          child: Column(
            children: [
              Flexible(
                  child: Image.network(
                this.img,
                fit: BoxFit.cover,
              )),
              Text(
                name,
                style: TextStyle(
                  fontSize: 18.0,
                  fontWeight: FontWeight.w500,
                ),
              ),
              Text(author)
            ],
          ),
        ));
  }
}
