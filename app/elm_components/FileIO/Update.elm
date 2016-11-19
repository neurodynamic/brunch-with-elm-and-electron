port module FileIO.Update exposing (..)

import List exposing (..)
import Model exposing (..)


--import Messages exposing (..)

import FileIO.Messages exposing (..)


update : FileIO.Messages.Msg -> Model -> ( Model, Cmd FileIO.Messages.Msg )
update msg model =
    case msg of
        SaveToFile ->
            ( model, saveFile model )

        SaveSuccess fileData ->
            ( { model | filepath = Just fileData.filepath, error = Nothing }, Cmd.none )

        SaveFailure errorMessage ->
            ( { model | error = Just errorMessage }, Cmd.none )

        OpenSuccess fileData ->
            ( { text = fileData.fileContent
              , filepath = Just fileData.filepath
              , error = Nothing
              }
            , Cmd.none
            )

        OpenFailure errorMessage ->
            ( { model | error = Just errorMessage }, Cmd.none )


saveFile model =
    case model.filepath of
        Nothing ->
            saveToFile model.text

        Just filepath ->
            updateFile { filepath = filepath, fileContent = model.text }


port saveToFile : String -> Cmd msg


port updateFile : { filepath : Filepath, fileContent : FileContent } -> Cmd msg


port openFile : String -> Cmd msg
