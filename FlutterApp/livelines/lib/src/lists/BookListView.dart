import 'package:flutter/material.dart';
import '../settings/settings_view.dart';

import 'BookListElement.dart';

class BookListView extends StatefulWidget {
  const BookListView(
      {Key? key,
      required Future<List<BookListElement>> Function(int PageKey) fetchPage})
      : this._fetchPage = fetchPage,
        super(key: key);
  final Future<List<BookListElement>> Function(int PageKey) _fetchPage;
  static const routeName = '/';

  @override
  BookListState createState() => BookListState();
}

class BookListState extends State<BookListView> {
  List<BookListElement> items = [];

  @override
  void initState() {
    super.initState();
    widget._fetchPage(0).then((value) => setState(() {
          items = value;
        }));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('Книги'),
          actions: [
            IconButton(
              icon: const Icon(Icons.settings),
              onPressed: () {
                Navigator.restorablePushNamed(context, SettingsView.routeName);
              },
            ),
          ],
        ),
        body: OrientationBuilder(
          builder: (context, orientation) => GridView.count(
            crossAxisCount: orientation == Orientation.portrait ? 2 : 4,
            children: items.map((e) => e.GetTile(context)).toList(),
          ),
        ));
  }
}
