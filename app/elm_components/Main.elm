module Main exposing (main)

import FileIO.Messages exposing (..)
import FileIO.Update exposing (..)
import FileIO.Subscriptions exposing (..)
import Model exposing (..)
import Html exposing (..)
import Html.Events exposing (..)
import Html.Attributes exposing (..)
import Task exposing (..)


type Msg
    = NoOp
    | UpdateText String
    | FileIOMsg FileIO.Messages.Msg


view : Model -> Html Msg
view model =
    main_ []
        [ p [] [ text "1. Type some stuff in the box!" ]
        , p [] [ text "2. Then save the stuff (go the the 'File' menu and click 'Save')!" ]
        , p [] [ text "3. Then close the app and reopen it and open the stuff (go the the 'File' menu and click 'Open')!" ]
        , textarea
            [ value model.text
            , onInput UpdateText
            , cols 30
            , rows 5
            ]
            []
        ]


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        UpdateText text ->
            ( { model | text = text }, Cmd.none )

        FileIOMsg subMsg ->
            let
                ( updatedModel, cmd ) =
                    FileIO.Update.update subMsg model
            in
                ( updatedModel, Cmd.map FileIOMsg cmd )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.map FileIOMsg (fileUtilsSubscriptions)


main : Program Never Model Msg
main =
    Html.program
        { init = ( initialModel, Cmd.none )
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
