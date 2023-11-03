import 'package:flutter/material.dart';

class BookDetailsArgs {
  final String id;
  const BookDetailsArgs(this.id);
}

/// Displays detailed information about a SampleItem.
class BookDetailsView extends StatelessWidget {
  const BookDetailsView({super.key});

  static const routeName = '/bookDetails';

  @override
  Widget build(BuildContext context) {
    final BookDetailsArgs args =
        ModalRoute.of(context)!.settings.arguments as BookDetailsArgs;
    return Scaffold(
      appBar: AppBar(
        title: Text(args.id),
      ),
      body: Center(
        child: Text('More Information Here'),
      ),
    );
  }
}
