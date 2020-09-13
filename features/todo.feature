Feature: todos

    Background:
        Given Page Should Contain Element input text description

    Scenario: I can add a todo
        When Submit a todo "Adopter de bonne partiques de test"
        Then Element Should contain "Adopter de bonne partiques de test"
        And CheckBox Should Not be Selected

    @selecttodo
    Scenario: I can select a todo
        When Submit a todo "Adopter de bonne partiques de test"
        And Submit a todo "Comprendre le Keyword-Driven Testing"
        And Submit a todo "Automatiser des cas de test avec Robot FrameWork"
        Then First Elment Should Contain "Adopter de bonne partiques de test"
        And Second Element Should Contain "Comprendre le Keyword-Driven Testing"
        And Third Element Should Contain "Automatiser des cas de test avec Robot FrameWork"
        When Select first Checkbox todo
        Then First CheckBox Should be Selected
        And Second Checkbox Should Not Be Selected
        And Third CheckBox Should Not Be Selected

    @removetodo
    Scenario: I can romove some todos
        When Submit a todo "Choisir le bon type de framework de test"
        Then Page Should Contain button remove todo
        When Click buton reomve todo
        Then Page Shoould Not Contain Element "Choisir le bon type de framework de test"

    @categorizetodo 
    Scenario: I can categorize some todos
        When Submit a todo "Choisir un livre intéressant"
        Then Page Should Not Contain Element category "Personnel" and "Professionel"
        When Select category "Personnel"
        When Submit a todo "Marcher et faire du vélo avec mon chien"
        Then First Element Text Shoould Be category "Personnel"
        When Submit a todo "Faire un câlin avec mon chat"
        Then Secound Element Text Should Be category "Personnel"
        When Select category "Professionnel"
        When Submit a todo "Automatiser un cas de test de plus"
        Then Third Element Text Should Be category "Professionnel"