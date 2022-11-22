<?php
    include_once './Assets/PHP/database.php';

    if(!isset($fname)) {
        $name = "";
    }
    if(!isset($lname)) {
        $name = "";
    }
    if(!isset($email)) {
        $email = "";
    }
    if(!isset($subject)) {
        $subject = "";
    }
    if(!isset($message)) {
        $message = "";
    }
    if(!isset($success)) {
        $success = null;
    }
    


    $fname = filter_input(INPUT_POST, 'first-name');
    $lname = filter_input(INPUT_POST, 'last-name');
    $email = filter_input(INPUT_POST, 'email');
    $subject = filter_input(INPUT_POST, 'subject');
    $message = filter_input(INPUT_POST, 'message');


    if(empty($fname)) {
        $err_name = "Name is required.";
    }

    if(empty($email)) {
        $err_email = "Email is required.";
    } elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $err_email = "Email is invalid.";
    }

    if(empty($subject)) {
        $err_subject = "Subject is required.";
    }

    if(empty($message)) {
        $err_message = "Message is required.";
    } elseif(strlen($message) < 5) {
        $err_message = "Message needs to be at least 5 characters.";
    }

    if(isset($_POST['submit']) && empty($err_name) && empty($err_email) && empty($err_subject) && empty($err_message)) {

        $submit = "INSERT INTO `Contact`(`Contact_FName`, `Contact_LName`, `Contact_Email`, `Contact_Subject`, `Contact_Message`) VALUES ('{$fname}','{$lname}','{$email}','{$subject}','{$message}')";
        $connect->query($submit);

        $fname = "";
        $lname = "";
        $email = "";
        $subject = "";
        $message = "";


        $success = "Successfully sent the message.";
    }


?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <title>Robertas Portfolio</title>
        <link rel="icon" href="Assets/Images/Home.svg">
        <link rel="stylesheet" href="Assets/CSS/main.css">
        <link rel="stylesheet" href="Assets/CSS/nav.css">
        <script src="https://kit.fontawesome.com/52d68163f3.js" crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,600&display=swap" rel="stylesheet">
    </head>
    <body>
        <nav id="nav">
            <h1 class="logo"><a href="#banner">RV</a></h1>
            <ul class="nav">
                <li>
                    <a href="Assets/HTML/about.html"><h3 class="nav-text">About</h3></a>
                </li>
                <li>
                    <a href="#projects"><h3 class="nav-text">Projects</h3></a>
                </li>
                <li>
                    <a href="Assets/HTML/code-examples.html"><h3 class="nav-text">Code</h3></a>
                </li>
                <li>
                    <a href="Assets/HTML/scs.html"><h3 class="nav-text">SCS</h3></a>
                </li>
                <li>
                    <a href="#contact"><h3 class="nav-text">Contact</h3></a>
                </li>
            </ul>
            <div class="socials">
                <span class="github"><a href="https://github.com/RJURU"><i class="fa-brands fa-square-github"></i></a></span>
                <span class="linkedin"><a href="https://www.linkedin.com/in/robertas-vildziunas-493b51230/"><i class="fa-brands fa-linkedin"></i></a></span>
            </div>
        </nav>
        <main>
            <div class="close-btn"></div>
            <div id="banner">
                <div class="banner-img-container">
                    <img class="banner-img" src="Assets/Images/Banner.jpeg" alt="Banner Image">
                </div>
                <div class="banner-content">
                    <h1 class="intro-name" id="intro-name"></h1>
                    <p class="bio" id="bio"></p>
                </div>
                <a class="scroll-down" href="#projects">
                    <i class="fa-solid fa-angle-down"></i>
                </a>
            </div>
            <div class="burger-btn">
                <div class="burger-line"></div>
            </div>
            <div id="projects">
                <div class="projects-header">
                    <h1 class="title">Projects</h1>
                    <form class="project-sort" id="project-sort" name="projectSort" novalidate>
                        <select id="project-selector" class="project-dropdown">
                            <option value="all" selected>All</option>
                            <option value="css">CSS</option>
                            <option value="html">HTML</option>
                            <option value="sql">SQL</option>
                            <option value="php">PHP</option>
                            <option value="js">JS</option>
                        </select>
                    </form>
                </div>
                <div class="projects-container" id="projects-container">
                    <a class="project html css js" href="https://netmatters.robertas-vildziunas.netmatters-scs.co.uk" target="_blank">
                        <div class="project-img-container">
                            <img class="project-img" src="Assets/Images/NetMatters_Site.png" alt="NetMatters Project">
                        </div>
                        <div class="project-info">
                            <h2 class="project-name">Netmatters Remake</h2>
                            <p class="project-about">This was a remake of the netmatters website as part of the html and css reflection on the scion course.</p>
                            <div class="languages">
                                <span class="language html">HTML</span>
                                <span class="language css">CSS</span>
                                <span class="language java-script">JS</span>
                            </div>
                        </div>
                    </a>
                    <a class="project sql" href="https://array.robertas-vildziunas.netmatters-scs.co.uk" target="_blank">
                        <div class="project-img-container">
                            <img class="project-img" src="Assets/Images/Array.png" alt="Array">
                        </div>
                        <div class="project-info">
                            <h2 class="project-name">Email-Image Array</h2>
                            <p class="project-about">Using SQL to attach images to various emails.</p>
                            <div class="languages">
                                <span class="language sql">SQL</span>
                            </div>
                        </div>
                    </a>
                    <a class="project js" href="#" target="_blank">
                        <div class="project-img-container">
                            <img class="project-img" src="Assets/Images/project-preview.jpg" alt="NetMatters Project">
                        </div>
                        <div class="project-info">
                            <h2 class="project-name">Project 3</h2>
                            <p class="project-about">Information about the project. Only a short and basic explanation.</p>
                            <div class="languages">
                                <span class="language java-script">JS</span>
                            </div>
                        </div>
                    </a>
                    <a class="project css" href="#" target="_blank">
                        <div class="project-img-container">
                            <img class="project-img" src="Assets/Images/project-preview.jpg" alt="NetMatters Project">
                        </div>
                        <div class="project-info">
                            <h2 class="project-name">Project 4</h2>
                            <p class="project-about">Information about the project. Only a short and basic explanation.</p>
                            <div class="languages">
                                <span class="language css">CSS</span>
                            </div>
                        </div>
                    </a>
                    <a class="project js" href="#" target="_blank">
                        <div class="project-img-container">
                            <img class="project-img" src="Assets/Images/project-preview.jpg" alt="NetMatters Project">
                        </div>
                        <div class="project-info">
                            <h2 class="project-name">Project 5</h2>
                            <p class="project-about">Information about the project. Only a short and basic explanation.</p>
                            <div class="languages">
                                <span class="language java-script">JS</span>
                            </div>
                        </div>
                    </a>
                    <a class="project html css php" href="#" target="_blank">
                        <div class="project-img-container">
                            <img class="project-img" src="Assets/Images/project-preview.jpg" alt="NetMatters Project">
                        </div>
                        <div class="project-info">
                            <h2 class="project-name">Project 6</h2>
                            <p class="project-about">Information about the project. Only a short and basic explanation.</p>
                            <div class="languages">
                                <span class="language html">HTML</span>
                                <span class="language css">CSS</span>
                                <span class="language php">PHP</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div id="contact">
                <div class="contact-col">
                    <div class="contact-info">
                        <h2>Contact</h2>
                        <p>If you would like to get in touch, ask questions about the projects, or would like to know more about me, you can contact me via</p>
                        <span class="contact-phone">
                            <i class="fa-solid fa-phone"></i>
                            07467527354
                        </span> <br>
                        <span class="contact-email">
                            <i class="fa-solid fa-envelope"></i>
                            thisisreal.email@gmail.com
                        </span>
                        <h3>Alternatively you can simply fill in this form...</h3>
                    </div>
                </div>
                <div class="contact-col">
                    <form action="./index.php#contact" method="post" class="contact-form" id="contact-form" name="contactForm" novalidate>
                        <div class="name">
                            <div class="col-1">
                                <label for="first-name" class="required firstName">First Name</label>
                                <input type="text" class="form-control" id="first-name" name="first-name">
                            </div>
                            <div class="col-1">
                                <label for="last-name">Last Name</label>
                                <input type="text" class="form-control" id="last-name" name="last-name">
                            </div>
                        </div>
                        <div class="col-2">
                            <label for="email" class="required email">Email</label>
                            <input type="email" class="form-control" id="email" name="email">
                        </div>
                        <div class="col-2">
                            <label for="subject" class="required form-subject">Subject</label>
                            <input type="text" class="form-control" id="subject" name="subject">
                        </div>
                        <div class="col-2">
                            <label for="message" class="required message">Message</label>
                            <textarea class="form-control" id="message" name="message"></textarea>
                        </div>
                        <div class="submit-btn-container">
                            <button name="submit" class="btn">Submit</button>
                        </div>
                        <div class="php-errors">
                            <?php if(isset($_POST['submit'])){ 
                                if(isset($err_name)) { ?>
                                    <div class="error_message"><? echo $err_name; ?><div class="err_close">×</div></div>
                                <?php } elseif (isset($err_email)) { ?>
                                    <div class="error_message"><?php echo $err_email; ?><div class="err_close">×</div></div>
                                <?php } elseif (isset($err_subject)) { ?>
                                    <div class="error_message"><?php echo $err_subject; ?><div class="err_close">×</div></div>
                                <?php } elseif (isset($err_message)) { ?>
                                    <div class="error_message"><?php echo $err_message; ?><div class="err_close">×</div></div>
                                <?php } elseif (isset($success) ) { ?>
                                    <div class="error_message success"><?php echo $success; ?><div class="err_close">×</div></div>
                                <?php } 
                            } ?>
                        </div>
                    </form>
                </div>
            </div>
        </main>
        <script src="Assets/JS/main.js"></script>
    </body>
</html>