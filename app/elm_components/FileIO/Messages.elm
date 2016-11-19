module FileIO.Messages exposing (..)


type alias Filepath =
    String


type alias FileContent =
    String


type alias ErrorMessage =
    String


type alias FileData =
    { filepath : Filepath, fileContent : FileContent }


type Msg
    = SaveToFile
    | SaveSuccess FileData
    | SaveFailure ErrorMessage
    | OpenSuccess FileData
    | OpenFailure ErrorMessage
