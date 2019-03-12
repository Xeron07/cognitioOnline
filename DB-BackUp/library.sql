-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 12, 2019 at 06:08 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 5.6.39

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library`
--

-- --------------------------------------------------------

--
-- Table structure for table `addreq`
--

CREATE TABLE `addreq` (
  `id` int(11) NOT NULL,
  `bid` int(11) NOT NULL,
  `publisher` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `bookName` varchar(100) NOT NULL,
  `author` varchar(100) NOT NULL,
  `edition` varchar(20) NOT NULL,
  `publishDate` varchar(100) NOT NULL,
  `ID` int(5) NOT NULL,
  `pic` varchar(255) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `publisher` varchar(100) NOT NULL,
  `category` varchar(50) NOT NULL,
  `copies` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`bookName`, `author`, `edition`, `publishDate`, `ID`, `pic`, `description`, `publisher`, `category`, `copies`) VALUES
('Introduction to Algorithms', 'Thomas H. Cormen,  Charles E. Leiserson, Ronald L. Rivest, Clifford Stein', '1st', 'September 1st 2001', 1, '6.jpg', 'This title covers a broad range of algorithms in depth, yet makes their design and analysis accessible to all levels of readers. Each chapter is relatively self-contained and can be used as a unit of study. The algorithms are described in English and in a pseudocode designed to be readable by anyone who has done a little programming. The explanations have been kept elementary without sacrificing depth of coverage or mathematical rigor.', 'MIT Press (MA)', 'Science', 121),
('The Hunger Games', 'Suzanne Collins', '1st', 'October 2008', 2, '1.jpg', 'ould you survive on your own, in the wild, with everyone out to make sure you don\'t live to see the morning?\r\n\r\nIn the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV. Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she is forced to represent her district in the Games. But Katniss has been close to dead before - and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weigh survival against humanity and life against love.\r\n\r\nNew York Times bestselling author Suzanne Collins delivers equal parts suspense and ph', 'Scholastic Press', 'Story', 12),
('Modern Operating Systems', 'Andrew S. Tanenbaum,  Herbert Bos', '1st', 'February 21st 2001', 3, '10.jpg', 'For software development professionals and computer science students, Modern Operating Systems gives a solid conceptual overview of operating system design, including detailed case studies of Unix/Linux and Windows 2000.', 'Prentice Hall ', 'CSE', 0),
('\r\nThe C Programming Language', 'Brian W. Kernighan,  Dennis M. Ritchie', '1st', 'April 1st 1988', 4, '20.jpg', 'This book is meant to help the reader learn how to program in C. It is the definitive reference guide, now in a second edition. Although the first edition was written in 1978, it continues to be a worldwide best-seller. This second edition brings the classic original up to date to include the ANSI standard. ', 'Prentice Hall ', 'CSE', 0),
('Artificial Intelligence: A Modern Approach', 'Stuart Russell,  Peter Norvig', '1st', 'December 20th 2002', 5, '16.jpg', 'For one or two-semester, undergraduate or graduate-level courses in Artificial Intelligence. The long-anticipated revision of this best-selling text offers the most comprehensive, up-to-date introduction to the theory and practice of artificial intelligence. *NEW-Nontechnical learning material-Accompanies each part of the book.', 'Prentice Hall ', 'Science', 0),
('Speak', 'Laurie Halse Anderson', '1st', 'January 15th 2019', 6, '2.jpg', 'From the first moment of her freshman year at Merryweather High, Melinda knows this is a big fat lie, part of the nonsense of high school. \r\nShe is friendless, outcast, because she busted an end-of-summer party by calling the cops, so now nobody will talk to her, let alone listen to her. As time passes, \r\nshe becomes increasingly isolated and practically stops talking altogether. Only her art class offers any solace, and it is through her work on an art project that \r\nshe is finally able to face what really happened at that terrible party: she was raped by an upperclassman, a guy who still attends Merryweather and is still a threat to her.\r\n Her healing process has just begun when she has another violent encounter with him. But this time Melinda fights back, refuses to be silent, and thereby achieves a \r\nmeasure of vindication. ', 'Farrar, Straus and Giroux', 'Story', 0),
('Compilers: Principles, Techniques, and Tools', 'Alfred V. Aho,  Ravi Sethi, Jeffrey D. Ullman', '1st', '1986', 7, '12.jpg', 'This introduction to compilers is the direct descendant of the well-known book by Aho and Ullman, Principles of Compiler Design. The authors present updated coverage of compilers based on research and techniques that have been developed in the field over the past few years. The book provides a thorough introduction to compiler design and covers topics such as context-free grammars, fine state machines, and syntax-directed translation.', 'Addison-Wesley Publishing Company', 'CSE', 0),
('Watership Down', 'Richard Adams', '1st', '1975', 8, '5.jpg', 'Set in England\'s Downs, a once idyllic rural landscape, this stirring tale of adventure, courage and survival follows a band of very special creatures on their flight \r\nfrom the intrusion of man and the certain destruction of their home. Led by a stouthearted pair of friends, they journey forth from their native Sandleford Warren through \r\nthe harrowing trials posed by predators and adversaries, to a mysterious promised land and a more perfect society.', 'Avon Books', 'Story', 0),
('Harry Potter and the Deathly Hallows', 'J.K. Rowling', '1st', 'July 21st 2007', 9, '4.jpg', 'Harry Potter is leaving Privet Drive for the last time. But as he climbs into the sidecar of Hagrid’s motorbike and they take to the skies, he knows Lord \r\nVoldemort and the Death Eaters will not be far behind.\r\n\r\nThe protective charm that has kept him safe until now is broken. But the Dark Lord is breathing fear into everything he loves. And he knows he can’t keep hiding.\r\n\r\nTo stop Voldemort, Harry knows he must find the remaining Horcruxes and destroy them.\r\n\r\nHe will have to face his enemy in one final battle.', 'Arthur A. Levine Books / Scholastic Inc.', 'Story', 0),
('Anna Karenina', 'Leo Tolstoy', '1st', '16th 2012', 10, '11.jpg', 'Acclaimed by many as the world\'s greatest novel, Anna Karenina provides a vast panorama of contemporary life in Russia and of humanity in general. In it Tolstoy uses \r\nhis intense imaginative insight to create some of the most memorable characters in literature. Anna is a sophisticated woman who abandons her empty existence as \r\nthe wife of Karenin and turns to Count Vronsky to fulfil her passionate nature - with tragic consequences. Levin is a reflection of Tolstoy himself, \r\noften expressing the author\'s own views and convictions.', 'Vintage', 'Story', 0),
('The Little Prince', 'Antoine de Saint-Exupéry', '2nd', 'June 29th 2000', 11, '15.jpg', 'Moral allegory and spiritual autobiography, The Little Prince is the most translated book in the French language. With a timeless charm it tells the story of a little \r\nboy who leaves the safety of his own tiny planet to travel the universe, learning the vagaries of adult behaviour through a series of extraordinary encounters. \r\nHis personal odyssey culminates in a voyage to Earth and further adventures.', 'Harcourt, Inc.', 'Story', 0),
('Romeo and Juliet', 'William Shakespeare', '2nd', '2002', 12, '8.jpg', 'In Romeo and Juliet, Shakespeare creates a violent world, in which two young people fall in love. It is not simply that their families disapprove;\r\n the Montagues and the Capulets are engaged in a blood feud.\r\n\r\nIn this death-filled setting, the movement from love at first sight to the lovers’ final union in death seems almost inevitable. And yet,\r\n this play set in an extraordinary world has become the quintessential story of young love. \r\nIn part because of its exquisite language, it is easy to respond as if it were about all young lovers.', 'Washington Square Press', 'Story', 0),
('\r\nThe Alchemist', 'Paulo Coelho', '1st', 'May 1st 1993', 13, '18.jpg', 'Paulo Coelho\'s masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. \r\nHis quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago\'s journey teaches us about the essential wisdom \r\nof listening to our hearts, of recognizing opportunity and learning to read the omens strewn along life\'s path, and, most importantly, to follow our dreams.', 'HarperCollins', 'Story', 0),
('Lord of the Flies', 'William Golding', '1st', 'October 1st 1999', 14, '3.jpg', 'At the dawn of the next world war, a plane crashes on an uncharted island, stranding a group of schoolboys. At first, with no adult supervision, \r\ntheir freedom is something to celebrate; this far from civilization the boys can do anything they want. Anything. They attempt to forge their own society, \r\nfailing, however, in the face of terror, sin and evil. And as order collapses, as strange howls echo in the night, as terror begins its reign, \r\nthe hope of adventure seems as far from reality as the hope of being rescued. Labeled a parable, an allegory, a myth, a morality tale, a parody, \r\na political treatise, even a vision of the apocalypse, Lord of the Flies is perhaps our most memorable tale about “the end of innocence, the darkness of man’s heart.”', 'Penguin Books', 'Story', 0),
('The Giving Tree', 'Shel Silverstein', '1st', '7th 1964', 15, '7.jpg', '\"Once there was a tree...and she loved a little boy.\"\r\n\r\nSo begins a story of unforgettable perception, beautifully written and illustrated by the gifted and versatile Shel Silverstein.\r\n\r\nEvery day the boy would come to the tree to eat her apples, swing from her branches, or slide down her trunk...and the tree was happy.\r\n But as the boy grew older he began to want more from the tree, and the tree gave and gave and gave.\r\n\r\nThis is a tender story, touched with sadness, aglow with consolation. Shel Silverstein has created a moving parable for readers of all \r\nages that offers an affecting interpretation of the gift of giving and a serene acceptance of another\'s capacity to love in return.', 'HarperCollins Publishers ', 'Story', 0),
('The Book Thief', 'by Markus Zusak', '1st', 'March 14th 2006', 16, '14.jpg', 'It is 1939. Nazi Germany. The country is holding its breath. Death has never been busier, and will be busier still.\r\n\r\nBy her brother\'s graveside, Liesel\'s life is changed when she picks up a single object, partially hidden in the snow. It is The Gravedigger\'s Handbook,\r\n left behind there by accident, and it is her first act of book thievery. So begins a love affair with books and words, as Liesel,\r\n with the help of her accordian-playing foster father, learns to read. Soon she is stealing books from Nazi book-burnings, \r\nthe mayor\'s wife\'s library, wherever there are books to be found.\r\nBut these are dangerous times. When Liesel\'s foster family hides a Jew in their basement, Liesel\'s world is both opened up, and closed down.\r\nIn superbly crafted writing that burns with intensity, award-winning author Markus Zusak has given us one of the most enduring stories of our time. ', 'Alfred A. Knopf', '', 0),
('The Fault in Our Stars', 'John Green', '1st', 'January 10th 2012', 17, '13.jpg', 'Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. \r\nBut when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel\'s story is about to be completely rewritten.\r\n\r\nInsightful, bold, irreverent, and raw, The Fault in Our Stars is award-winning author John Green\'s most ambitious and heartbreaking work yet, brilliantly exploring the funny,\r\n thrilling, and tragic business of being alive and in love.', 'Dutton Books', 'Story', 0),
('The Great Gatsby', 'F. Scott Fitzgerald', '1st', 'September 2004', 18, '17.jpg', 'THE GREAT GATSBY, F. Scott Fitzgerald\'s third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations \r\nof readers. The story is of the fabulously wealthy Jay Gatsby and his new love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when \r\nThe New York Times noted \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s.\r\n\r\nThe Great Gatsby is one of the great classics of twentieth-century literature.', 'Scribner', 'Story', 0),
('Gone with the Wind', 'Margaret Mitchell', '1st', 'April 1st 1999', 20, '9.jpg', 'Margaret Mitchell\'s monumental epic of the South won a Pulitzer Prize,\r\n gave rise to the most popular motion picture of our time, and inspired a sequel that became the fastest selling novel of the century.\r\n It is one of the most popular books ever written: more than 28 million copies of the book have been sold in more than 37 countries. \r\nToday, more than 60 years after its initial publication, its achievements are unparalleled, and it remains the most revered American saga and \r\nthe most beloved work by an American writer...', 'Warner Books ', 'Story', 0);

-- --------------------------------------------------------

--
-- Table structure for table `borrow`
--

CREATE TABLE `borrow` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `bid` int(11) NOT NULL,
  `borrowDate` varchar(55) NOT NULL,
  `returnDate` varchar(55) NOT NULL,
  `active` int(11) NOT NULL,
  `rtn` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `borrow`
--

INSERT INTO `borrow` (`id`, `uid`, `bid`, `borrowDate`, `returnDate`, `active`, `rtn`) VALUES
(1, 3, 1, '03/10/2019', '3/17/2019', 0, 1),
(2, 3, 1, '03/10/2019', '3/17/2019', 0, 1),
(3, 3, 2, '03/10/2019', '3/17/2019', 0, 1),
(8, 17, 2, '03/10/2019', '3/17/2019', 0, 1),
(9, 2, 5, '03/12/2019', '3/17/2019', 0, 1),
(10, 2, 6, '03/12/2019', '3/17/2019', 0, 1),
(11, 2, 5, '03/12/2019', '3/17/2019', 0, 1),
(12, 1, 6, '03/12/2019', '3/17/2019', 0, 1),
(13, 3, 6, '03/12/2019', '3/17/2019', 0, 1),
(14, 2, 6, '03/12/2019', '3/17/2019', 0, 1),
(15, 5, 6, '03/12/2019', '3/17/2019', 0, 1),
(16, 15, 2, '03/12/2019', '3/17/2019', 0, 1),
(17, 15, 6, '03/12/2019', '3/17/2019', 1, 0),
(18, 15, 2, '03/12/2019', '3/17/2019', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `borrowreq`
--

CREATE TABLE `borrowreq` (
  `id` int(11) NOT NULL,
  `bid` int(11) NOT NULL,
  `uid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `borrowreq`
--

INSERT INTO `borrowreq` (`id`, `bid`, `uid`) VALUES
(19, 1, 15),
(20, 4, 15);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(21) NOT NULL,
  `email` varchar(35) NOT NULL,
  `password` varchar(16) NOT NULL,
  `type` varchar(7) NOT NULL DEFAULT 'other',
  `varify` int(11) NOT NULL DEFAULT '0',
  `pic` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `type`, `varify`, `pic`) VALUES
(1, 'Md. Sakib', 'akkas19@gmail.com', '1', '', 0, ''),
(3, 'Adnan', 'a@a.com', '2', 'other', 0, ''),
(7, 'a', 'a@a.com', '2', 'other', 0, ''),
(9, 'a', 'nihal.0.m7@gmail.com', '1', 'other', 0, ''),
(10, 'a', 'nihal.0.m7@gmail.com', '2', 'other', 0, ''),
(11, 'a', 'nihal.0.m7@gmail.com', '2', 'other', 0, ''),
(15, 'q', 'a@a.com', '123', 'other', 0, 'download (1).jpg'),
(16, 'a', 'aa@gmail.com', '1', 'other', 0, ''),
(17, 'admin', 'a@admin.com', 'admin', 'Admin', 1, ''),
(18, 'adnan', 'p@p.com', '123', 'publish', 1, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addreq`
--
ALTER TABLE `addreq`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `borrow`
--
ALTER TABLE `borrow`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `borrowreq`
--
ALTER TABLE `borrowreq`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addreq`
--
ALTER TABLE `addreq`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `ID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `borrow`
--
ALTER TABLE `borrow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `borrowreq`
--
ALTER TABLE `borrowreq`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
