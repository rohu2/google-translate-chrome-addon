# google-translate-chrome-addon
Chrome addon used to quickly copy any English-Russian translation on Google Translate

This is an Chrome addon with a very specific purpose. For any English-Russian translation it will allow you copy the english and russian (latin script and cyrillic script) simultaneously. These values get pushed to an array on the addon. You can continuously add more words to this array, and then when you hit print the pages innerHTML will become a list of all the words you added - Cyrillic, "Romanicized" Cyrillic and English.

The list is presented as an array containing objects, you can then copy and paste this array of objects and use it as data in your app
