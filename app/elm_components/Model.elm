module Model exposing (..)


type alias Model =
    { text : String
    , filepath : Maybe String
    , error : Maybe String
    }


initialModel =
    Model "" Nothing Nothing
